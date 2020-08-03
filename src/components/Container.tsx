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
        <Box borderBottomLeftRadius="round" overflow="hidden" height={height * 0.61}>
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
          borderRadius="round"
          borderTopLeftRadius={0}
          backgroundColor="white"
          flex={1}
        >
          {children}
        </Box>
        <Box paddingBottom={insets.bottom} paddingTop="m">
          {footer}
        </Box>
      </Box>
    </Box>
  );
};

export default Container;
