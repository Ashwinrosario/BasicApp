import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../Screens/Login';
import Signup from '../Screens/SignUp';
import {useLogin} from '../Context/LoginProvider';
import MainNavigator from './MainNavigation';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  const {isLoggedIn} = useLogin();
  if (isLoggedIn) {
    return <MainNavigator />;
  }
  return <AuthNavigator />;
};

export default RootNavigator;
