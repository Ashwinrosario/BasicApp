import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Signup from '../Screens/SignUp';

const Stack = createNativeStackNavigator();

const AuthNavigator = ({setHide}) => {
  useEffect(() => {
    setHide(true);
  }, [setHide]);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
