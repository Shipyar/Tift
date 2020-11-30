import React, { ReactNode } from "react";
import { KeyboardAvoidingView } from "react-native";

import { Box } from "./Theme";

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const Container = ({ children, footer }: ContainerProps) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Box flex={1} backgroundColor="lightBlue">
        <Box
          borderBottomLeftRadius="round"
          borderBottomRightRadius="round"
          backgroundColor="white"
          justifyContent="space-around"
          flex={1}
        >
          {children}
        </Box>
        <Box paddingTop="m">{footer}</Box>
      </Box>
    </KeyboardAvoidingView>
  );
};

export default Container;
