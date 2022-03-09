import React from 'react';
import { View } from 'react-native';
import Layout from '../constants/Layout';
import Text from './Text';

const DATES = [
	{
		name: 'Dita e parë e Ramazanit',
		date: '03/04/2022',
	},
	{
		name: 'Nata e Kadrit',
		date: '03/04/2022',
	},
	{
		name: 'Dita e Fitër Bajramit',
		date: '03/04/2022',
	},
	{
		name: 'Dita e Kurban Bajramit',
		date: '03/04/2022',
	},
	{
		name: 'Dita e Fitër Bajramit',
		date: '03/04/2022',
	},
	{
		name: 'Dita e Kurban Bajramit',
		date: '03/04/2022',
	},
];

const ImportantDates = () => {
	return (
		<View
			style={{
				paddingHorizontal: 24,
			}}>
			{DATES.map((item, index) => (
				<View
					key={index}
					style={{
						width: Layout.window.width - 24 * 2,
						height: 48,
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingHorizontal: 16,
						borderRadius: 8,
						borderWidth: 1,
						borderColor: '#759CDC',
						marginBottom: 8,
					}}>
					<Text
						style={{
							color: '#759CDC',
						}}>
						{item.name}
					</Text>
					<Text
						style={{
							color: '#759CDC',
						}}>
						{item.date}
					</Text>
				</View>
			))}
		</View>
	);
};

export default ImportantDates;
