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

const Akshami = (props: SvgProps) => (
	<Svg
		width={Layout.window.width}
		height={Layout.window.width}
		viewBox="0 0 375 375"
		fill="none"
		{...props}>
		<G clipPath="url(#clip0_301_3520)">
			<Path
				opacity={0.1}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M37.6652 148C22.9384 148 11 159.938 11 174.665C11 189.392 22.9384 201.33 37.6652 201.33H51.5645C53.0384 214.663 64.3417 225.033 78.067 225.033H165.335C180.062 225.033 192 213.094 192 198.368C192 183.641 180.062 171.702 165.335 171.702H151.435C149.962 158.37 138.658 148 124.933 148H37.6652Z"
				fill="white"
			/>
			<Path
				opacity={0.2}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M245.5 -54C234.178 -54 225 -44.8218 225 -33.5C225 -22.1782 234.178 -13 245.5 -13H306.5C295.178 -13 286 -3.82184 286 7.5C286 18.8218 295.178 28 306.5 28H269.5C258.178 28 249 37.1782 249 48.5C249 59.8218 258.178 69 269.5 69H369.5C380.822 69 390 59.8218 390 48.5C390 37.1782 380.822 28 369.5 28H406.5C417.822 28 427 18.8218 427 7.5C427 -3.82184 417.822 -13 406.5 -13H345.5C356.822 -13 366 -22.1782 366 -33.5C366 -44.8218 356.822 -54 345.5 -54H245.5Z"
				fill="white"
			/>
			<Path
				opacity={0.1}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M-117.335 52C-132.062 52 -144 63.9384 -144 78.6652C-144 93.3919 -132.062 105.33 -117.335 105.33H-103.435C-101.962 118.663 -90.6583 129.033 -76.933 129.033H10.3348C25.0616 129.033 37 117.094 37 102.368C37 87.6408 25.0616 75.7024 10.3348 75.7024H-3.56453C-5.03836 62.3699 -16.3416 52 -30.067 52H-117.335Z"
				fill="white"
			/>
			<Circle opacity={0.15} cx={375} cy={239} r={100} fill="white" />
			<Circle opacity={0.15} cx={375} cy={239} r={75} fill="white" />
			<Circle opacity={0.75} cx={375} cy={239} r={50} fill="#FEFEF1" />
		</G>
		<Defs>
			<ClipPath id="clip0_301_3520">
				<Rect width={375} height={375} fill="white" />
			</ClipPath>
		</Defs>
	</Svg>
);

export default Akshami;
