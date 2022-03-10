import React from 'react';
import { View } from 'react-native';
import Colors from '../constants/Colors';
import CheckIcon from '../icons/CheckIcon';

interface Props {
	isActive: boolean;
}

const CheckBox = ({ isActive }: Props) => {
	return (
		<View
			style={{
				height: 18,
				width: 18,
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: 2,
				borderWidth: 2,
				borderColor: Colors.primary,
				backgroundColor: isActive ? Colors.primary : undefined,
			}}>
			{isActive && <CheckIcon />}
		</View>
	);
};

export default CheckBox;
