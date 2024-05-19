import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigation';
import SplashScreen from 'react-native-splash-screen';
import {Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [initialRoute, setInitialRoute] = React.useState('');

  React.useEffect(() => {
    const checkUser = async () => {
      try {
        const name = await AsyncStorage.getItem('name');
        console.log('in the app.js', name);
        if (name) {
          setInitialRoute('Home');
        } else {
          setInitialRoute('Login');
        }
      } catch (error) {
        console.error(error);
      } finally {
        if (Platform.OS === 'android') {
          SplashScreen.hide();
        }
      }
    };

    checkUser();
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator initialRoute={initialRoute} />
    </NavigationContainer>
  );
};

export default App;
