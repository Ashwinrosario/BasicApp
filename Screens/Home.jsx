import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation, route}) => {
  console.log('home page');
  const [name, setName] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchName = async () => {
      try {
        const storedName = await AsyncStorage.getItem('name');
        if (storedName) {
          setName(storedName);
        }
      } catch (error) {
        console.error('Failed to fetch name from AsyncStorage', error);
      } finally {
        setLoading(false);
      }
    };
    fetchName();
  }, [route]);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('name');
      setName('');
      alert('Successfully Logged Out');
    } catch (error) {
      console.error('Failed to remove name from AsyncStorage', error);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {name !== '' ? (
        <>
          <Text style={styles.text}> Hi {name}! </Text>
          <Button
            style={styles.buttonContainer}
            title="Try Logging Out"
            onPress={handleLogout}
          />
        </>
      ) : (
        <>
          <Text style={styles.text}> Home </Text>
          <Button
            style={styles.buttonContainer}
            title="Login"
            onPress={() => navigation.navigate('Login')}
          />
        </>
      )}
    </View>
  );
};

export default Home;

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
  text: {
    color: 'rgb(59,108,212)',
    fontSize: 42,
    fontWeight: '100',
    textAlign: 'center',
  },
});
