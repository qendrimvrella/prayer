import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SettingsIcon = (props: SvgProps) => (
	<Svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		stroke="white"
		strokeWidth={2}
		fill="none"
		{...props}>
		<Path
			d="M20.1604 6.71129L12.5001 2.28864C12.1907 2.11 11.8095 2.11001 11.5001 2.28864L3.83984 6.71129C3.53044 6.88992 3.33984 7.22005 3.33984 7.57731V16.4226C3.33984 16.7799 3.53044 17.11 3.83984 17.2886L11.5001 21.7113C11.8095 21.8899 12.1907 21.8899 12.5001 21.7113L20.1604 17.2886C20.4698 17.11 20.6604 16.7799 20.6604 16.4226V7.57731C20.6604 7.22005 20.4698 6.88992 20.1604 6.71129Z"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<Path
			d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</Svg>
);

export default SettingsIcon;
