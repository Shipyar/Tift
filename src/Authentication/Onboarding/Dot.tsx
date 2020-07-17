import React from 'react'
import { StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'

interface DotProps {
   index: number;
   currentIndex: Animated.Node<number>;
}

const Dot = ({ index, currentIndex }: DotProps) => {
   return (
      <Animated.View style={styles.dot} />
   )
}

export default Dot

const styles = StyleSheet.create({
   dot: {
      backgroundColor: '#2CB9B0',
      width: 8,
      height: 8,
      borderRadius: 4,
   }
})
