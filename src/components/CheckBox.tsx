import React from 'react'
import { Box, Text } from './Theme';
import Icon from './Icons/Icon';
import { RectButton } from 'react-native-gesture-handler';

interface CheckBoxProps {
  label: string,
  checked: boolean;
  onChange: () => void;
}

const CheckBox = ({ label, checked, onChange }: CheckBoxProps) => {;
  return (
    <RectButton onPress={() => onChange()} style={{ justifyContent: 'center' }} >
      <Box flexDirection="row" alignItems="center">
        <Box
          marginRight="s"
          height={20}
          width={20}
          borderRadius="s"
          justifyContent="center"
          alignItems="center"
          borderWidth={1}
          borderColor="tiftGreen"
          backgroundColor={checked ? 'tiftGreen' : 'white'}
        >
          <Icon name="icon-check" stroke="#fff" fill="none" width={16} height={16} />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  )
}

export default CheckBox
