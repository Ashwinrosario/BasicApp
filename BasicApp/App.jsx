import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './Navigator/AppNavigator';
import LoginProvider from './Context/LoginProvider';

const App = () => {
  return (
    <LoginProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </LoginProvider>
  );
};

export default App;
