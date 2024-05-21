import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './Navigator/AppNavigator';
import LoginProvider from './Context/LoginProvider';
// import messaging from '@react-native-firebase/messaging';
// import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const App = () => {
  // async function requestUserPermission() {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     console.log('Authorization status:', authStatus);
  //   }
  // }

  // const getToken = async () => {
  //   const token = await messaging().getToken();
  //   console.log('token form the app.jsx : ', token);
  // };

  // useEffect(() => {
  //   requestUserPermission();
  //   getToken();
  // }, []);

  return (
    <LoginProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </LoginProvider>
  );
};

export default App;
