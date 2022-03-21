import { BlurView } from 'expo-blur';
import React from 'react';
import { View } from 'react-native';
import fontWeights from '../constants/fontWeights';
import Layout from '../constants/Layout';
import Text from './Text';

interface Props {
	activeTime: string;
	items: Array<{
		key: string;
		name: string;
		time: string;
	}>;
}

const Times = ({ activeTime, items }: Props) => {
	return (
		<View>
			{items.map((item, index) => (
				<BlurView
					intensity={70}
					key={index}
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						overflow: 'hidden',
						width: Layout.window.width - 24 * 2,
						height: 48,
						paddingHorizontal: 16,
						backgroundColor:
							item.key === activeTime ? '#ffffff55' : '#ffffff22',
						borderRadius: 8,
						marginBottom: 8,
					}}>
					<Text
						style={{
							color: '#fff',
							fontSize: 16,
						}}>
						{item.name}
					</Text>
					<Text
						style={{
							color: '#fff',
							fontSize: 16,
						}}>
						{item.time}
					</Text>
				</BlurView>
			))}
		</View>
	);
};

export default Times;
