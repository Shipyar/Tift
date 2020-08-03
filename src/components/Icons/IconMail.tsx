import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface IconMailProps {
  fill: string;
  stroke: string;
  width: number;
  height: number;
}

const IconMail = ({ fill = "none", width = 24, height = 24, stroke }: IconMailProps) => {
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
      <Path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <Path d="M22 6l-10 7L2 6" />
    </Svg>
  )
}

export default IconMail
