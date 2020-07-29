import React, { ReactNode } from "react";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Box } from "./Theme";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.66;

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const Container = ({ children, footer }: ContainerProps) => {
  const insets = useSafeAreaInsets();

  return (
    <Box flex={1} backgroundColor="titleText">
      <Box backgroundColor="white">
        <Box borderBottomLeftRadius={40} overflow="hidden" height={height * 0.61}>
          <Box style={{ width, height }} backgroundColor="tiftGreen" />
        </Box>
      </Box>

      <Box flex={1}>
        <Box
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
          }}
          backgroundColor="tiftGreen"
        />
        <Box
          borderRadius={40}
          borderTopLeftRadius={0}
          backgroundColor="white"
          flex={1}
        >
          {children}
        </Box>
        <Box paddingTop="m">
          {footer}
          <Box height={insets.bottom} />
        </Box>
      </Box>
    </Box>
  );
};

export default Container;
