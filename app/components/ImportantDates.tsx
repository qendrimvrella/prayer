import React from 'react';
import { View } from 'react-native';
import Colors from '../constants/Colors';
import Text from './Text';

const DATES = [
	{
		name: 'Dita e parë e Ramazanit',
		date: '01/03/2025',
	},
	{
		name: 'Nata e Kadrit',
		date: '26/03/2025',
	},
	{
		name: 'Dita e Fitër Bajramit',
		date: '30/03/2025',
	},
	{
		name: 'Dita e Kurban Bajramit',
		date: '06/06/2025',
	},
	{
		name: 'Viti i Ri - 1444 Hixhri',
		date: '26/06/2025',
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
