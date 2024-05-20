import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './Navigator/RootNavigation';
import SplashScreen from 'react-native-splash-screen';
import {Platform} from 'react-native';
import LoginProvider from './Context/LoginProvider';

const App = () => {
  React.useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <LoginProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </LoginProvider>
  );
};

export default App;
