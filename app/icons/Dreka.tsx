import * as React from 'react';
import Svg, {
	SvgProps,
	G,
	Path,
	Circle,
	Defs,
	ClipPath,
	Rect,
} from 'react-native-svg';
import Layout from '../constants/Layout';

const Dreka = (props: SvgProps) => (
	<Svg
		width={Layout.window.width}
		height={Layout.window.width}
		viewBox="0 0 375 375"
		fill="none"
		{...props}>
		<G clipPath="url(#clip0_301_3570)">
			<Path
				opacity={0.2}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M-127.5 90C-138.822 90 -148 99.1782 -148 110.5C-148 121.822 -138.822 131 -127.5 131H-66.5C-77.8218 131 -87 140.178 -87 151.5C-87 162.822 -77.8218 172 -66.5 172H-103.5C-114.822 172 -124 181.178 -124 192.5C-124 203.822 -114.822 213 -103.5 213H-3.5C7.82184 213 17 203.822 17 192.5C17 181.178 7.82184 172 -3.5 172H33.5C44.8218 172 54 162.822 54 151.5C54 140.178 44.8218 131 33.5 131H-27.5C-16.1782 131 -7 121.822 -7 110.5C-7 99.1782 -16.1782 90 -27.5 90H-127.5Z"
				fill="white"
			/>
			<Path
				opacity={0.1}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M282.665 193C267.938 193 256 204.938 256 219.665C256 234.392 267.938 246.33 282.665 246.33H296.565C298.038 259.663 309.342 270.033 323.067 270.033H410.335C425.062 270.033 437 258.094 437 243.368C437 228.641 425.062 216.702 410.335 216.702H396.435C394.962 203.37 383.658 193 369.933 193H282.665Z"
				fill="white"
			/>
			<Circle opacity={0.2} cx={187} cy={166} r={100} fill="white" />
			<Circle opacity={0.2} cx={187} cy={166} r={75} fill="white" />
			<Circle opacity={0.75} cx={187} cy={166} r={50} fill="#FEFEF1" />
		</G>
		<Defs>
			<ClipPath id="clip0_301_3570">
				<Rect width={375} height={375} fill="white" />
			</ClipPath>
		</Defs>
	</Svg>
);

export default Dreka;
