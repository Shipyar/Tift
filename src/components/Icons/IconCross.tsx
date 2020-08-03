import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface IconCross {
  fill: string;
  stroke: string;
  width: number;
  height: number;
}

const IconCross = ({ fill = "none", width = 24, height = 24, stroke }: IconCross) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M18 6L6 18M6 6l12 12" />
    </Svg>
  )
}

export default IconCross
