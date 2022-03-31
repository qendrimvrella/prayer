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

const Ikindia = (props: SvgProps) => (
	<Svg
		width={Layout.window.width}
		height={Layout.window.width}
		viewBox="0 0 375 375"
		fill="none"
		{...props}>
		<G clipPath="url(#clip0_301_3558)">
			<Path
				opacity={0.1}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M272.665 193C257.938 193 246 204.938 246 219.665C246 234.392 257.938 246.33 272.665 246.33H286.565C288.038 259.663 299.342 270.033 313.067 270.033H400.335C415.062 270.033 427 258.094 427 243.368C427 228.641 415.062 216.702 400.335 216.702H386.435C384.962 203.37 373.658 193 359.933 193H272.665Z"
				fill="white"
			/>
			<Path
				opacity={0.2}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M-137.5 90C-148.822 90 -158 99.1782 -158 110.5C-158 121.822 -148.822 131 -137.5 131H-76.5C-87.8218 131 -97 140.178 -97 151.5C-97 162.822 -87.8218 172 -76.5 172H-113.5C-124.822 172 -134 181.178 -134 192.5C-134 203.822 -124.822 213 -113.5 213H-13.5C-2.17816 213 7 203.822 7 192.5C7 181.178 -2.17816 172 -13.5 172H23.5C34.8218 172 44 162.822 44 151.5C44 140.178 34.8218 131 23.5 131H-37.5C-26.1782 131 -17 121.822 -17 110.5C-17 99.1782 -26.1782 90 -37.5 90H-137.5Z"
				fill="white"
			/>
			<Circle opacity={0.2} cx={247} cy={186} r={100} fill="white" />
			<Circle opacity={0.2} cx={247} cy={186} r={75} fill="white" />
			<Circle opacity={0.75} cx={247} cy={186} r={50} fill="#FEFEF1" />
		</G>
		<Defs>
			<ClipPath id="clip0_301_3558">
				<Rect width={375} height={375} fill="white" />
			</ClipPath>
		</Defs>
	</Svg>
);

export default Ikindia;
