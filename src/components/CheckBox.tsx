import React, { useState } from 'react'
import { Box, Text } from './Theme';
import Icon from './Icons/Icon';
import { RectButton } from 'react-native-gesture-handler';

interface CheckBoxProps {
  label: string,
}

const CheckBox = ({ label }: CheckBoxProps) => {
  const [checked, setChecked] = useState(false);
  return (
    <RectButton onPress={() => setChecked((c) => !c)} style={{ justifyContent: 'center' }} >
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
