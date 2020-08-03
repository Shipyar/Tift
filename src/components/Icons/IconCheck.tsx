import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface IconCheckProps {
  fill: string;
  stroke: string;
  width: number;
  height: number;
}

const IconCheckProps = ({ fill = "none", width = 24, height = 24, stroke }: IconCheckProps) => {
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
      <Path d="M20 6L9 17l-5-5" />
    </Svg>
  )
}

export default IconCheckProps
