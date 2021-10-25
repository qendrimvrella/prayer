import React from "react";
import Svg, { Circle } from "react-native-svg"

function Sabah({ props }: { props: any }) {
  return (
    <Svg
      width={25}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={15} cy={15} r={5} stroke="#000" strokeWidth={1} />
    </Svg>
  );
}

export default Sabah;
