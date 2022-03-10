import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const CheckIcon = (props: SvgProps) => (
	<Svg
		width={10}
		height={8}
		viewBox="0 0 10 8"
		fill="none"
		stroke="white"
		strokeWidth={2}
		{...props}>
		<Path
			d="M9 1L3.66667 7L1 4"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</Svg>
);

export default CheckIcon;
