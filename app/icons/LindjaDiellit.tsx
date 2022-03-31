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

const LindjaDiellit = (props: SvgProps) => (
	<Svg
		width={Layout.window.width}
		height={Layout.window.width}
		viewBox="0 0 375 375"
		fill="none"
		{...props}>
		<G clipPath="url(#clip0_301_3504)">
			<Path
				opacity={0.1}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M315.665 193C300.938 193 289 204.938 289 219.665C289 234.392 300.938 246.33 315.665 246.33H329.565C331.038 259.663 342.342 270.033 356.067 270.033H443.335C458.062 270.033 470 258.094 470 243.368C470 228.641 458.062 216.702 443.335 216.702H429.435C427.962 203.37 416.658 193 402.933 193H315.665Z"
				fill="white"
			/>
			<Circle opacity={0.15} cx={-5} cy={239} r={100} fill="white" />
			<Circle opacity={0.15} cx={-5} cy={239} r={75} fill="white" />
			<Circle opacity={0.75} cx={-5} cy={239} r={50} fill="#FEFEF1" />
		</G>
		<Defs>
			<ClipPath id="clip0_301_3504">
				<Rect width={375} height={375} fill="white" />
			</ClipPath>
		</Defs>
	</Svg>
);

export default LindjaDiellit;
