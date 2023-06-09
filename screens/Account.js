import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const Account = () => {
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('1234567890'); //  from backend logic
  const [email, setEmail] = useState('example@example.com'); // from backend logic
  const [profilePicture, setProfilePicture] = useState('https://example.com/profile.jpg'); // fetch from backend

  const handleChangePassword = () => {
    // Logic to change the password
    console.log('Password changed:', password);
  };

  const handleUpdateProfile = () => {
    // Logic to update the phone number, email, and profile picture
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email);
    console.log('Profile Picture:', profilePicture);

  };

  const handleSelectProfilePicture = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel && !response.error) {
        setProfilePicture(response.uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="New Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Change Password" onPress={handleChangePassword} />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Update Profile" onPress={handleUpdateProfile} />

      <View style={styles.profilePictureContainer}>
        <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
        <Button
          title="Change Profile Picture"
          onPress={handleSelectProfilePicture}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  button: {
    width: 200,
    borderRadius: 10,
  },
});

export default Account;
