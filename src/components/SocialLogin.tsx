import React, { ReactNode } from "react";

import Icon from "../components/Icons/Icon";
import { Box } from "../components/Theme";

interface SocialIconProps {
  children: ReactNode;
}

const SocialIcon = ({ children }: SocialIconProps) => {
  return (
    <Box
      marginHorizontal="s"
      backgroundColor="white"
      width={44}
      height={44}
      borderRadius="l"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

const SocialLogin = () => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <Icon
          name="icon-google"
          fill="#000"
          width={20}
          height={20}
          stroke="none"
        />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
