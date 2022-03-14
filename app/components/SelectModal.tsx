import React from 'react';
import { Modal, Pressable, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import fontWeights from '../constants/fontWeights';
import Layout from '../constants/Layout';
import CheckIcon from '../icons/CheckIcon';
import { View, Text } from './Themed';

interface Props {
	title: string;
	modalVisible: boolean;
	modalHeight: number;
	onClose: () => void;
	value: string;
	onPress: (name: string) => void;
	items: Array<string>;
}

const SelectModal = ({
	title,
	modalVisible,
	onClose,
	modalHeight,
	onPress,
	value,
	items,
}: Props) => {
	return (
		<Modal animationType="fade" visible={modalVisible} transparent={true}>
			<Pressable onPress={onClose} style={styles.modalContainer}>
				<View
					style={[
						styles.selectModalContainer,
						{
							height: modalHeight,
						},
					]}>
					<Text style={styles.title}>{title}</Text>
					{items.map((item, index) => (
						<Pressable
							key={index}
							onPress={() => {
								onPress(item);
								onClose();
							}}
							style={({ pressed }) => [
								{
									backgroundColor: pressed
										? '#759CDC33'
										: undefined,
								},
								{
									flexDirection: 'row',
									justifyContent: 'space-between',
									alignItems: 'center',
									paddingHorizontal: 24,
									paddingVertical: 20,
								},
							]}>
							<Text
								style={[
									styles.selectTitle,
									{
										fontFamily:
											value === item
												? fontWeights[500]
												: fontWeights[400],
									},
								]}>
								{item}
							</Text>
							{value === item && (
								<CheckIcon
									height={14}
									width={14}
									stroke={Colors.primary}
								/>
							)}
						</Pressable>
					))}
				</View>
			</Pressable>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: '#33333377',
	},
	selectModalContainer: {
		width: Layout.window.width,
		height: 400,
		borderRadius: 24,
		paddingTop: 16,
	},
	title: {
		fontSize: 18,
		paddingHorizontal: 24,
		fontFamily: fontWeights[500],
		marginBottom: 14,
	},
	selectTitle: {
		fontSize: 16,
	},
});

export default SelectModal;
