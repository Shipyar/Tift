import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

interface IconLockProps {
  fill: string;
  stroke: string;
  width: number;
  height: number;
}


const IconLock = ({ fill = "none", width = 24, height = 24, stroke }: IconLockProps) => {
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
      <Rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
      <Path d="M7 11V7a5 5 0 0110 0v4" />
    </Svg>
  )
}

export default IconLock