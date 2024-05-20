import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useLogin} from '../Context/LoginProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Dashboard = () => {
  const {setIsLoggedIn} = useLogin();
  const [facts, setFacts] = useState('');

  const fetchFacts = async () => {
    try {
      const response = await axios.get('https://dogapi.dog/api/v2/facts/');
      setFacts(response.data.data[0].attributes.body);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFacts();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('name');
    setIsLoggedIn(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoutButtonContainer}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
      <Text style={styles.text}>Dog Facts</Text>
      {facts && <Text style={styles.factsText}>{facts}</Text>}
      <View style={styles.refreshButtonContainer}>
        <Button title="Refresh" onPress={fetchFacts} />
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  buttonContainer: {
    alignContent: 'center',
    textAlign: 'center',
    width: 50,
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButtonContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'red',
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
    color: 'rgb(59,108,300)',
    fontSize: 52,
    fontWeight: '400',
    textAlign: 'center',
  },
  refreshButtonContainer: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    justifyContent: 'center',
  },
  factsText: {
    marginTop: 20,
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
