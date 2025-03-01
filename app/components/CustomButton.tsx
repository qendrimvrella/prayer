import React from 'react';
import {
	Pressable,
	PressableProps,
	StyleProp,
	ViewStyle,
	StyleSheet,
	View,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import { Text } from './Themed';

interface Props extends PressableProps {
	title: string;
	subTitle: string;
	style?: StyleProp<ViewStyle>;
	onPress?: (e: any) => void;
}

const CustomButton = ({ title, subTitle, style, onPress, ...props }: Props) => {
	const handlePress = (e: any) => {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
		onPress && onPress(e);
	};

	return (
		<Pressable
			style={({ pressed }) => [
				styles.item,
				{
					opacity: pressed ? 0.5 : 1,
				},
				style,
			]}
			onPress={handlePress}
			{...props}>
			<View>
				<Text style={styles.itemTitle}>{title}</Text>
				<Text style={styles.itemText}>{subTitle}</Text>
			</View>
			<ArrowRightIcon />
		</Pressable>
	);
};

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 12,
	},
	itemTitle: {
		fontSize: 18,
		marginBottom: 5,
	},
	itemText: {
		color: '#767676',
		fontSize: 12,
	},
});

export default CustomButton;
