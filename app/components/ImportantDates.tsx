import { ScrollView, View } from 'react-native';
import Colors from '../constants/Colors';
import Text from './Text';

const DATES = [
	{
		name: 'Nata e Miraxhit',
		date: '15.01.2026',
	},
	{
		name: 'Nata e Beratit',
		date: '02.02.2026',
	},
	{
		name: 'Dita e parë e Ramazanit',
		date: '19.02.2026',
	},
	{
		name: 'Dita e fitorës në Bedër',
		date: '07.03.2026',
	},
	{
		name: 'Nata e Kadrit',
		date: '16.03.2026',
	},
	{
		name: 'Nata e Fitër Bajramit',
		date: '19.03.2026',
	},
	{
		name: 'Dita e Fitër Bajramit',
		date: '20.03.2026',
	},
	{
		name: 'Nata e Kurban Bajramit',
		date: '26.05.2026',
	},
	{
		name: 'Dita e Kurban Bajramit',
		date: '27.05.2026',
	},
	{
		name: 'Viti i Ri - 1448 Hixhri',
		date: '16.06.2026',
	},
	{
		name: 'Dita e Ashurës',
		date: '25.06.2026',
	},
	{
		name: 'Nata e Mevludit',
		date: '24.08.2026',
	},
	{
		name: 'Nata e Regaibit',
		date: '10.12.2026',
	},
];

const isToday = (dateString: string) => {
	const [day, month, year] = dateString.split('.').map(Number);
	const today = new Date();
	return (
		today.getDate() === day &&
		today.getMonth() + 1 === month &&
		today.getFullYear() === year
	);
};

const ImportantDates = () => {
	return (
		<ScrollView
			style={{
				paddingHorizontal: 24,
			}}
			contentContainerStyle={{
				paddingBottom: 120,
			}}
			showsVerticalScrollIndicator={false}>
			{DATES.map((item, index) => {
				const isTodayDate = isToday(item.date);
				return (
					<View
						key={index}
						style={{
							height: 52,
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							paddingHorizontal: 16,
							borderRadius: 8,
							backgroundColor: isTodayDate
								? Colors.primary
								: '#B3B2EF33',
							marginBottom: 8,
						}}>
						<Text
							style={{
								color: isTodayDate ? '#FFFFFF' : Colors.primary,
								fontSize: 16,
								fontWeight: isTodayDate ? '600' : '400',
							}}>
							{item.name}
						</Text>
						<Text
							style={{
								color: isTodayDate ? '#FFFFFF' : Colors.primary,
								fontSize: 16,
								fontWeight: isTodayDate ? '600' : '400',
							}}>
							{item.date}
						</Text>
					</View>
				);
			})}
		</ScrollView>
	);
};

export default ImportantDates;
