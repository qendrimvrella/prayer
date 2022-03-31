import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
import Layout from '../constants/Layout';

const Imsaku = (props: SvgProps) => (
	<Svg
		width={Layout.window.width}
		height={Layout.window.width}
		viewBox="0 0 375 375"
		fill="none"
		{...props}>
		<G clipPath="url(#clip0_301_3512)">
			<Path
				opacity={0.1}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M277.665 181C262.938 181 251 192.938 251 207.665C251 222.392 262.938 234.33 277.665 234.33H291.565C293.038 247.663 304.342 258.033 318.067 258.033H405.335C420.062 258.033 432 246.094 432 231.368C432 216.641 420.062 204.702 405.335 204.702H391.435C389.962 191.37 378.658 181 364.933 181H277.665Z"
				fill="white"
			/>
			<Path
				opacity={0.1}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M-73.5 45C-84.8218 45 -94 54.1782 -94 65.5C-94 76.8218 -84.8218 86 -73.5 86H-12.5C-23.8218 86 -33 95.1782 -33 106.5C-33 117.822 -23.8218 127 -12.5 127H-49.5C-60.8218 127 -70 136.178 -70 147.5C-70 158.822 -60.8218 168 -49.5 168H50.5C61.8218 168 71 158.822 71 147.5C71 136.178 61.8218 127 50.5 127H87.5C98.8218 127 108 117.822 108 106.5C108 95.1782 98.8218 86 87.5 86H26.5C37.8218 86 47 76.8218 47 65.5C47 54.1782 37.8218 45 26.5 45H-73.5Z"
				fill="white"
			/>
		</G>
		<Defs>
			<ClipPath id="clip0_301_3512">
				<Rect width={375} height={375} fill="white" />
			</ClipPath>
		</Defs>
	</Svg>
);

export default Imsaku;
