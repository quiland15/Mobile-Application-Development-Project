import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Textinput from '../../componets/TextInput/index';
import Header from '../../componets/Header';
import Button from '../../componets/Button';

export default function Login() {
  const [title, useTitle] = useState('Welcome Back')
  const onSignIn = () => {
    console.log('Button di click');
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header/>

      {/* Input Email */}
      <Textinput/>

      {/* Input Password */}
      <Textinput placeholder='Password'/>

      {/* Tombol Login */}
      <Button onPress={onSignIn}/>
      <Button color='red' label='Sign In Google'/>
      <Button color='blue' label='Sign In Facebook'/>
      <Button color='black' label='Sign In Apple'/>

      {/* Link Lupa Password */}
      <Text style={styles.link}>Forgot Password?</Text>

      {/* Link Daftar */}
      <View style={styles.registerRow}>
        <Text style={styles.registerText}>Don't have an account? <Text style={[styles.registerText, styles.link]}>Sign Up</Text> </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 24,
    paddingTop: 80,
    alignItems: 'center',
  },
  link: {
    color: '#3498db',
    fontSize: 14,
    marginTop: 16,
  },
  registerRow: {
    flexDirection: 'row',
    marginTop: 24,
  },
  registerText: {
    fontSize: 14,
    color: '#2c3e50',
  },
});