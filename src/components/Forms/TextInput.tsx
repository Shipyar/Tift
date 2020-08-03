import React, { useState } from 'react'
import { TextInput as RNTextInput, StyleSheet, TextInputProps as RNTextInputProps } from 'react-native';

import { Box } from '../../components/Theme';
import Icon from '../../components/Icons/Icon';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';

interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  icon: string;
  validator: (input: string) => boolean;
}

const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({ placeholder, icon, validator, ...props }: TextInputProps) => {
  const [input, setInput] = useState('');
  const [valid, setValid] = useState<InputState>(Pristine);

  const onChangeText = (text: string) => {
    setInput(text);
    if (valid !== Pristine) validate();
  }

  const validate = () => {
    const valid = validator(input);
    setValid(valid);
  }

  return (
    <Box
      flexDirection="row"
      height={48}
      alignItems="center"
      borderBottomWidth={StyleSheet.hairlineWidth}
      borderColor={valid === Valid ? 'tiftGreen': 'warning'}
    >
      <Box padding="s">
        <Icon name={icon} stroke={valid === Valid ? '#3FC85F': '#F8AEAE'} fill="none" width={24} height={24} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          onBlur={validate}
          {...{onChangeText}}
          {...props}
        />
      </Box>
      
      {
        (valid === Valid || valid === Invalid) && (
          <Box
            height={20}
            width={20}
            borderRadius="m"
            justifyContent="center"
            alignItems="center"
            backgroundColor={valid === Valid ? 'tiftGreen': 'warning'}
          >
            <Icon name={valid === Valid ? 'icon-check' : 'icon-cross'} stroke="#fff" fill="none" width={16} height={16}/>
          </Box>
        )
      }
    </Box>
  )
}

export default TextInput
