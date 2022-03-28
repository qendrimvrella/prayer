import React from 'react';
import { Switch, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import Colors from '../constants/Colors';
import { Text, View } from './Themed';

interface Props {
	title: string;
	subTitle: string;
	value: boolean;
	onValueChange: (val: boolean) => void;
	style?: StyleProp<ViewStyle>;
}

const CustomSwitch = ({
	title,
	subTitle,
	value,
	onValueChange,
	style,
}: Props) => {
	return (
		<View style={[styles.item, style]}>
			<View>
				<Text style={styles.itemTitle}>{title}</Text>
				<Text style={styles.itemText}>{subTitle}</Text>
			</View>
			<Switch
				value={value}
				onValueChange={onValueChange}
				trackColor={{ false: '#767577', true: Colors.primary }}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
	},
	itemTitle: {
		fontSize: 18,
		marginBottom: 5,
	},
	itemText: {
		color: '#767676',
		fontSize: 12,
	},
});

export default CustomSwitch;
