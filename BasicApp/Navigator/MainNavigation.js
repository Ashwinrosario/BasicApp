import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../Screens/Dashboard';

const Stack = createNativeStackNavigator();

const MainNavigator = ({setHide}) => {
  useEffect(() => {
    setHide(true);
  }, [setHide]);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
