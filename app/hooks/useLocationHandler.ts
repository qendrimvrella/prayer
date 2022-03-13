import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useLocationHandler() {
	const [country, setCountry] = useState('Kosovë');
	const [city, setCity] = useState('Prishtinë');

	const onCountryChange = useCallback(async (name) => {
		try {
			await AsyncStorage.setItem('country', name);
			setCountry(name);
		} catch (error) {}
	}, []);
	const onCityChange = useCallback(async (name) => {
		try {
			await AsyncStorage.setItem('city', name);
			setCity(name);
		} catch (error) {}
	}, []);

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

	useEffect(() => {
		getItems();
	}, []);

	return {
		country,
		city,
        onCountryChange,
        onCityChange,
	} as const;
}
