import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const Vector = (props: SvgProps) => (
  <Svg width={8} height={8} viewBox="0 0 8 8" fill="none" {...props}>
    <Path
      d="M4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7Z"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Vector;
