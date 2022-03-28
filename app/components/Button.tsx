import React from 'react';
import {
	Pressable,
	PressableProps,
	StyleProp,
	ViewStyle,
	StyleSheet,
	ActivityIndicator,
} from 'react-native';
import Colors from '../constants/Colors';
import fontWeights from '../constants/fontWeights';
import { Text } from './Themed';

interface Props extends PressableProps {
	title: string;
	isLoading?: boolean;
	style?: StyleProp<ViewStyle>;
}

const Button = ({ title, isLoading, style, ...props }: Props) => {
	return (
		<Pressable
			style={({ pressed }) => [
				styles.btn,
				{
					backgroundColor: pressed ? '#759CDCaa' : Colors.primary,
				},
				style,
			]}
			{...props}>
			{isLoading ? (
				<ActivityIndicator color="#000" />
			) : (
				<Text style={styles.btnText}>{title}</Text>
			)}
		</Pressable>
	);
};

const styles = StyleSheet.create({
	btn: {
		height: 48,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
	},
	btnText: {
		fontFamily: fontWeights[500],
		fontSize: 16,
	},
});

export default Button;
