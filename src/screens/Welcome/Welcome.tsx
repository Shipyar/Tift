import React from 'react'
import { Box, Text } from '../../components/Theme';
import { Button } from '../../components';

import { Routes, StackNavigationProps } from '../../components/Navigation';

const Welcome = ({ navigation }: StackNavigationProps<Routes, 'Welcome'>) => {
   return (
      <Box flex={1} backgroundColor="white">
         <Box flex={1} borderBottomRightRadius="round" backgroundColor="welcomeGrey"></Box>
         <Box flex={1} borderTopLeftRadius="round">
            <Box 
               backgroundColor="welcomeGrey"
               position="absolute"
               top={0}
               bottom={0}
               left={0}
               right={0}
            />
            <Box
               backgroundColor="white"
               borderTopLeftRadius="round"
               flexGrow={1}
               justifyContent="space-evenly"
               alignItems="center"
               padding="xl"
            >
               <Text variant="smTitle">Lets get started</Text>
               <Text variant="body">Login to your account below or signup for the new you.</Text>
               <Button variant="primary" label="Have and account? Login" onPress={() => navigation.navigate('Login')} />
               <Button label="Join us, it's Free" onPress={() => console.log('update me')} />
               <Button variant="transparent" label="Forgot password?" onPress={() => console.log('update me')} />
            </Box>
         </Box>
      </Box>
   )
}

export default Welcome
