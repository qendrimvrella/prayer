import React from 'react';
import { Text as DefaultText } from 'react-native';
import fontWeights from '../constants/fontWeights';

const Text = ({ style, children, ...otherProps }: DefaultText['props']) => {
	return (
		<DefaultText
			style={[{ fontFamily: fontWeights[400] }, style]}
			{...otherProps}>
			{children}
		</DefaultText>
	);
};

export default Text;
