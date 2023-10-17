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
					intensity={50}
					key={index}
					tint={item.key === activeTime ? 'light' : 'default'}
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						overflow: 'hidden',
						width: Layout.window.width - 24 * 2,
						height: 48,
						paddingHorizontal: 16,
						// backgroundColor:
						// 	item.key === activeTime ? '#ffffff55' : '#ffffff22',
						borderRadius: 8,
						marginBottom: 8,
					}}>
					<Text
						style={{
							color: '#fff',
							fontSize: 18,
						}}>
						{item.name}
					</Text>
					<Text
						style={{
							color: '#fff',
							fontSize: 18,
							fontFamily: fontWeights[500],
						}}>
						{item.time}
					</Text>
				</BlurView>
			))}
		</View>
	);
};

export default Times;
