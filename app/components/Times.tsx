import { BlurView } from 'expo-blur';
import React, { useEffect } from 'react';
import { View, Pressable } from 'react-native';
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withSpring,
	withTiming,
	withRepeat,
	withSequence,
	interpolate,
	cancelAnimation,
	Extrapolation,
} from 'react-native-reanimated';
import fontWeights from '../constants/fontWeights';
import Layout from '../constants/Layout';
import Text from './Text';
import * as Haptics from 'expo-haptics';

interface Props {
	activeTime: string;
	activeTimeColor: string;
	items: Array<{
		key: string;
		name: string;
		time: string;
	}>;
}

const Times = ({ activeTime, activeTimeColor, items }: Props) => {
	const scales = items.map(() => useSharedValue(1));
	// Handle press animation
	const handlePressIn = (index: number) => {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
		scales[index].value = withSpring(0.95, {
			damping: 10,
			stiffness: 300,
		});
	};

	const handlePressOut = (index: number) => {
		scales[index].value = withSpring(1, {
			damping: 10,
			stiffness: 300,
		});
	};

	return (
		<View>
			{items.map((item, index) => {
				const animatedStyle = useAnimatedStyle(() => {
					return {
						transform: [{ scale: scales[index].value }],
						borderRadius: 8,
						marginBottom: 8,
					};
				});

				return (
					<Pressable
						key={index}
						onPressIn={() => handlePressIn(index)}
						onPressOut={() => handlePressOut(index)}>
						<Animated.View style={animatedStyle}>
							<BlurView
								intensity={item.key === activeTime ? 50 : 0}
								tint={'light'}
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									alignItems: 'center',
									overflow: 'hidden',
									width: Layout.window.width - 24 * 2,
									height: 48,
									paddingHorizontal: 16,
									borderRadius: 8,
								}}>
								<Text
									style={{
										color: '#fff',
										fontSize: 18,
										fontFamily:
											item.key === activeTime
												? fontWeights[500]
												: fontWeights[400],
									}}>
									{item.name}
								</Text>
								<Text
									style={{
										color: '#fff',
										fontSize: 18,
										fontFamily:
											item.key === activeTime
												? fontWeights[500]
												: fontWeights[400],
									}}>
									{item.time}
								</Text>
							</BlurView>
						</Animated.View>
					</Pressable>
				);
			})}
		</View>
	);
};

export default Times;
