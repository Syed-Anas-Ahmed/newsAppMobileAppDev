import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    // Perform registration logic here
    if (!username || !email || !password) {
      // Incorrect login details, show toast message
      ToastAndroid.show("Please Fill All The Fields", ToastAndroid.SHORT);
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        }
      };

      console.log(username);
      // const { data } = 
      await axios.post("http://192.168.100.67:8080/api/users", {
        name: username,
        email: email,
        password: password
      }, config);
      ToastAndroid.show("User Has been Registered Successfully", ToastAndroid.SHORT)

      // set User in local Storage
      // localStorage.setItem("userInfo", JSON.stringify(data));
      navigation.navigate('Home');

    } catch (error) {
      if (error.response && error.response.data && error.response.data?.msg) {
        ToastAndroid.show(error.response.data?.msg, ToastAndroid.SHORT);
      } else {
        ToastAndroid.show(error.response.data?.msg, ToastAndroid.SHORT);
      }
    }
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Registration Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.registerText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  registerText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
