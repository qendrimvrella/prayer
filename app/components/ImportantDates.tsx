import React from 'react';
import { View } from 'react-native';
import Colors from '../constants/Colors';
import Text from './Text';

const DATES = [
	{
		name: 'Dita e parë e Ramazanit',
		date: '02/04/2022',
	},
	{
		name: 'Nata e Kadrit',
		date: '27/04/2022',
	},
	{
		name: 'Dita e Fitër Bajramit',
		date: '02/05/2022',
	},
	{
		name: 'Dita e Kurban Bajramit',
		date: '09/07/2022',
	},
	{
		name: 'Viti i Ri - 1444 Hixhrij',
		date: '30/07/2022',
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
						height: 52,
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingHorizontal: 16,
						borderRadius: 8,
						backgroundColor: '#B3B2EF33',
						marginBottom: 8,
					}}>
					<Text
						style={{
							color: Colors.primary,
							fontSize: 16,
						}}>
						{item.name}
					</Text>
					<Text
						style={{
							color: Colors.primary,
							fontSize: 16,
						}}>
						{item.date}
					</Text>
				</View>
			))}
		</View>
	);
};

export default ImportantDates;
