import React from 'react';
import { Pressable } from 'react-native';

interface Props {
	item: {
		onPress: () => void;
		icon: () => JSX.Element;
		isActive: boolean;
		activeBgColor: string;
	};
}

const NavItem = ({ item }: Props) => {
	const ITEM_WIDTH = 48;

	return (
		<Pressable
			onPress={item.onPress}
			style={{
				height: ITEM_WIDTH,
				width: ITEM_WIDTH,
				backgroundColor: item.isActive ? item.activeBgColor : '#E3EBF855',
				borderRadius: ITEM_WIDTH,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			{item.icon()}
		</Pressable>
	);
};

export default NavItem;
