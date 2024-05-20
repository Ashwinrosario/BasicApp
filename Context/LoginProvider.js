import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginContext = createContext();

const LoginProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await AsyncStorage.getItem('name');
        if (user) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Failed to fetch the user from storage', error);
      }
    };

    getUser();
  }, []);

  return (
    <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);

export default LoginProvider;
