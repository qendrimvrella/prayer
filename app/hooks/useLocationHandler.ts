import { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function useLocationHandler() {
	const [country, setCountry] = useState<'Kosovë'>('Kosovë');
	const [city, setCity] = useState('Prishtinë');

	const onCountryChange = useCallback(
		async (name) => {
			try {
				await AsyncStorage.setItem('country', name);
				await AsyncStorage.setItem('city', '');
				if (name == 'Kosovë') {
					await AsyncStorage.setItem('city', 'Prishtinë');
					setCity('Prishtinë');
				} else if (name == 'Shqipëri') {
					await AsyncStorage.setItem('city', 'Tirana');
					setCity('Tirana');
				} else if (name == 'Maqedoni Veriore') {
					await AsyncStorage.setItem('city', 'Shkupi');
					setCity('Shkupi');
				}
				setCountry(name);
			} catch (error) {}
		},
		[country],
	);

	const onCityChange = useCallback(
		async (name) => {
			try {
				await AsyncStorage.setItem('city', name);
				setCity(name);
			} catch (error) {}
		},
		[city],
	);

	const getItems = async () => {
		try {
			const countryName = await AsyncStorage.getItem('country');
			if (countryName !== null) {
				setCountry(countryName);
			}
			const cityName = await AsyncStorage.getItem('city');
			if (cityName !== null) {
				setCity(cityName);
			}
		} catch (error) {}
	};

	useFocusEffect(
		useCallback(() => {
			getItems();
		}, [country, city]),
	);

	return {
		country,
		city,
		onCountryChange,
		onCityChange,
	} as const;
}
