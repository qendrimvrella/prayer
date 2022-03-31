import React from 'react';
import {
	Pressable,
	PressableProps,
	StyleProp,
	ViewStyle,
	StyleSheet,
	View,
} from 'react-native';
import Colors from '../constants/Colors';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import { Text } from './Themed';

interface Props extends PressableProps {
	title: string;
	subTitle: string;
	style?: StyleProp<ViewStyle>;
}

const CustomButton = ({ title, subTitle, style, ...props }: Props) => {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.item,
				{
					backgroundColor: pressed ? '#759CDC33' : undefined,
				},
				style,
			]}
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
