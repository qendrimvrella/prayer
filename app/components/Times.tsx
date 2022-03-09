import React from 'react';
import { View } from 'react-native';
import Layout from '../constants/Layout';
import Text from './Text';

interface Props {
	activeTime: string;
	items: Array<{
		name: string;
		time: string;
	}>;
}

const Times = ({ activeTime, items }: Props) => {
	return (
		<View>
			{items.map((item, index) => (
				<View
					key={index}
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						width: Layout.window.width - 24 * 2,
						height: 48,
						paddingHorizontal: 16,
						backgroundColor:
							item.name === activeTime
								? '#ffffff55'
								: '#ffffff22',
						borderRadius: 8,
						marginBottom: 8,
					}}>
					<Text
						style={{
							color: '#fff',
						}}>
						{item.name}
					</Text>
					<Text
						style={{
							color: '#fff',
						}}>
						{item.time}
					</Text>
				</View>
			))}
		</View>
	);
};

export default Times;
