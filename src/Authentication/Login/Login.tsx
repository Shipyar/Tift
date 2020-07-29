import React from 'react'
import { StyleSheet, View } from 'react-native';

import { Container, SocialLogin, Button, Text, Box } from '../../components';
import { Routes, StackNavigationProps } from '../../components/Navigation';

const Login = ({ navigation }: StackNavigationProps<Routes, 'Login'>) => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => navigation.navigate('Onboarding')}>
          <Box flexDirection="row" justifyContent="center" flex={1}>
            <Text color="white">Don't have an account? </Text> 
            <Text marginLeft="s" color="welcomeGrey" variant="button">Sign up here</Text>
          </Box>
        </Button>
      </Box>
    </>
  )

  return (
    <Container {...{footer}}>
      <View />
    </Container>
  )
}

export default Login

const styles = StyleSheet.create({})
