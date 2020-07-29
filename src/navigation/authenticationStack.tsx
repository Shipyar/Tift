import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Routes } from './Navigation';
import Welcome from '../screens/Welcome';
import Onboarding from '../screens/Onboarding';
import Login from '../screens/Login';

const AuthenticationStack = createStackNavigator<Routes>();
export const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator headerMode="none">
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
    <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    <AuthenticationStack.Screen name="Login" component={Login} />
  </AuthenticationStack.Navigator>
);