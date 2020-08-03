import React from 'react'

import { Container, SocialLogin, Button, Text, Box, TextInput, CheckBox } from '../../components';
import { Routes, StackNavigationProps } from '../../components/Navigation';

const emailValidator = (email: string) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const passwordValidator = (password: string) => password.length >= 6;

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
      <Box padding="xl">
        <Text variant="title" textAlign="center" marginBottom="l">Welcome Back</Text>
        <Text variant="body" textAlign="center">Use your credentials below to login to your account</Text>
        <Box marginBottom="m">
          <TextInput icon="icon-mail" placeholder="Enter your email" validator={emailValidator} />
          <TextInput icon="icon-lock" placeholder="Enter your password" validator={passwordValidator} />
        </Box>
        <Box flexDirection="row" justifyContent="space-between" >
          <CheckBox label="Remember me" />
          <Button variant="transparent" onPress={() => true}>
            <Text color="tiftGreen">Forgot password?</Text>
          </Button>
        </Box>
        <Box alignItems="center" marginTop="l">
          <Button variant="primary" onPress={() => true} label="Log into your account" />
        </Box>
      </Box>
    </Container>
  )
}

export default Login
