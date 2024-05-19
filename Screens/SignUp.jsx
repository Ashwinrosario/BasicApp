import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Signup({navigation}) {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleSignUp = async () => {
    try {
      await AsyncStorage.setItem('name', name);
      navigation.navigate('Home', {name});
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <View style={styles.inputContainer}>
        <TextInput
          label="Name"
          mode="outlined"
          value={name}
          onChangeText={name => setName(name)}
        />
        <TextInput
          label="Password"
          mode="outlined"
          value={password}
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>
      {name && password && (
        <View style={styles.ButtonContainer}>
          <Button
            title="Signup"
            onPress={handleSignUp}
            mode="contained"
            buttonColor="blue"
            style={{margin: 10}}>
            <Text style={{padding: 20, margin: 10}}>Signup</Text>
          </Button>
        </View>
      )}
    </View>
  );
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  text: {
    color: 'rgb(59,108,212)',
    fontSize: 42,
    fontWeight: '100',
    textAlign: 'center',
  },
});
