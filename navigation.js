import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Signup from './Screens/SignUp';

const Stack = createNativeStackNavigator();

function AppNavigator({initialRoute}) {
  console.log('from the navigator', initialRoute);
  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
