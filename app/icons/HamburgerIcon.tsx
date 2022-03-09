import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const HamburgerIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		stroke="white"
		strokeWidth={2}
		{...props}>
		<Path d="M20 18H4" strokeLinecap="round" strokeLinejoin="round" />
		<Path d="M20 14H4" strokeLinecap="round" strokeLinejoin="round" />
		<Path d="M20 10H4" strokeLinecap="round" strokeLinejoin="round" />
		<Path d="M20 6H4" strokeLinecap="round" strokeLinejoin="round" />
	</Svg>
);

export default HamburgerIcon;
