import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useLogin} from '../Context/LoginProvider';
import axios from 'axios';

const Login = ({navigation}) => {
  const {setIsLoggedIn} = useLogin();
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    if (name === '' || password === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    try {
      await axios
        .post('http://192.168.29.97:8000/login', {
          name: name,
          password: password,
        })
        .then(async res => {
          if (res.data.message === 'true') {
            await AsyncStorage.setItem('name', name);
            setIsLoggedIn(true);
          } else if (res.data.message === 'User does not exist') {
            Alert.alert(
              'Error',
              "Couldn't Log you in:( \n Please try Register first",
            );
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <View style={styles.inputContainer}>
        <TextInput
          label="Name"
          mode="outlined"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          label="Password"
          mode="outlined"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.buttonRow}>
        <View style={styles.buttonWrapper}>
          <Button
            mode="contained"
            onPress={handleLogin}
            style={styles.button}
            buttonColor="blue">
            <Text style={styles.buttonText}>Login</Text>
          </Button>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Signup')}
            style={styles.button}
            buttonColor="blue">
            <Text style={styles.buttonText}>Signup</Text>
          </Button>
          <Text style={styles.signupText}>Don't have an Account</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  buttonWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    margin: 10,
  },
  buttonText: {
    padding: 10,
    margin: 5,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  text: {
    color: 'rgb(59,108,300)',
    fontSize: 52,
    fontWeight: '400',
    textAlign: 'center',
  },
  signupText: {
    marginTop: 10,
    textAlign: 'center',
  },
});
