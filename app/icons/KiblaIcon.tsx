import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

interface KiblaIconProps extends SvgProps {
	stroke?: string;
}

const KiblaIcon = ({ stroke = 'white', ...props }: KiblaIconProps) => (
	<Svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		{...props}>
		<Circle
			cx={12}
			cy={12}
			r={9}
			stroke={stroke}
			strokeWidth={1.8}
		/>
		<Path
			d="M12 3V12L16 8"
			stroke={stroke}
			strokeWidth={1.8}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<Circle cx={12} cy={12} r={1.5} fill={stroke} />
		<Path
			d="M12 2V4M12 20V22M2 12H4M20 12H22"
			stroke={stroke}
			strokeWidth={1.8}
			strokeLinecap="round"
		/>
	</Svg>
);

export default KiblaIcon;
