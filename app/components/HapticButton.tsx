import React from 'react';
import {
	Pressable,
	PressableProps,
	StyleProp,
	ViewStyle,
	StyleSheet,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import fontWeights from '../constants/fontWeights';

export interface HapticButtonProps extends PressableProps {
	children: React.ReactNode;
	style?: StyleProp<ViewStyle>;
	onPress?: (e: any) => void;
}

const HapticButton = ({
	children,
	style,
	onPress,
	...props
}: HapticButtonProps) => {
	const handlePress = (e: any) => {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
		onPress && onPress(e);
	};

	return (
		<Pressable
			style={({ pressed }) => [
				styles.btn,
				{
					opacity: pressed ? 0.5 : 1,
				},
				style,
			]}
			onPress={handlePress}
			{...props}>
			{children}
		</Pressable>
	);
};

const styles = StyleSheet.create({
	btn: {},
	btnText: {
		fontFamily: fontWeights[500],
		fontSize: 16,
	},
});

export default HapticButton;
