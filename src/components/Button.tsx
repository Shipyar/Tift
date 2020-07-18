import React from 'react'
import { RectButton } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

import { Text } from './index'

interface ButtonProps {
   label: string;
   variant: 'default' | 'primary';
   onPress: () => void;
}

const styles = StyleSheet.create({
   container: {
      borderRadius: 25,
      height: 50,
      width: 245,
      alignItems: 'center',
      justifyContent: 'center',
   },
   label: {
      textAlign: 'center',
   }
})

const Button = ({ label, variant, onPress }: ButtonProps) => {
   const backgroundColor = variant === 'primary' ? '#2CB9B0' : 'rgba(12, 13, 52, 0.05)';
   const color = variant === 'primary' ? '#fff' : '#0C0D34';
   return (
      <RectButton style={[styles.container, { backgroundColor }]} {... { onPress }}>
         <Text variant="body" style={[styles.label, { color }]}>{label}</Text>
      </RectButton>
   )
}

Button.defaultProps = { variant: 'default' }

export default Button
