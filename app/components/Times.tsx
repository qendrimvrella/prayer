import React from 'react';
import { Pressable, View } from 'react-native';
import Layout from '../constants/Layout';
import Text from './Text';

interface Props {
	activeTime: string;
	items: Array<{
		key: string;
		name: string;
		time: string;
		onPress: () => void;
	}>;
}

const Times = ({ activeTime, items }: Props) => {
	return (
		<View>
			{items.map((item, index) => (
				<Pressable
					key={index}
					onPress={item.onPress}
					style={({ pressed }) => [
						{
							backgroundColor: pressed
								? '#ffffff55'
								: item.key === activeTime
								? '#ffffff55'
								: '#ffffff22',
						},
						{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							width: Layout.window.width - 24 * 2,
							height: 48,
							paddingHorizontal: 16,
							borderRadius: 8,
							marginBottom: 8,
						},
					]}>
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
				</Pressable>
			))}
		</View>
	);
};

export default Times;
