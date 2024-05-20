import React, {useState} from 'react';
import {useLogin} from '../Context/LoginProvider';
import MainNavigator from './MainNavigation';
import AuthNavigator from './AuthNavigation';
import SplashScreen from 'react-native-splash-screen';

const AppNavigator = () => {
  const {isLoggedIn} = useLogin();
  const [hide, setHide] = useState(false);

  React.useEffect(() => {
    if (hide) {
      SplashScreen.hide();
    }
  }, [hide]);

  if (isLoggedIn) {
    return <MainNavigator setHide={setHide} />;
  } else {
    return <AuthNavigator setHide={setHide} />;
  }
};

export default AppNavigator;
