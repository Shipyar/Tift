import React from 'react'
import { TextInput as RNTextInput, StyleSheet, TextInputProps as RNTextInputProps } from 'react-native';

import { Box } from '../../components/Theme';
import Icon from '../../components/Icons/Icon';

interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  icon: string;
  touched?: boolean;
  error?: string;
}

const TextInput = ({ placeholder, touched, error, icon, ...props }: TextInputProps) => {
  return (
    <Box
      flexDirection="row"
      height={48}
      alignItems="center"
      borderBottomWidth={StyleSheet.hairlineWidth}
      borderColor={!error ? 'tiftGreen' : 'warning'}
    >
      <Box padding="s">
        <Icon name={icon} stroke={!error ? '#3FC85F' : '#F8AEAE'} fill="none" width={24} height={24} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          {...props}
        />
      </Box>

      {touched && (
        <Box
          height={20}
          width={20}
          borderRadius="m"
          justifyContent="center"
          alignItems="center"
          backgroundColor={!error ? 'tiftGreen' : 'warning'}
        >
          <Icon name={!error ? 'icon-check' : 'icon-cross'} stroke="#fff" fill="none" width={16} height={16} />
        </Box>
      )
      }
    </Box>
  )
}

export default TextInput
