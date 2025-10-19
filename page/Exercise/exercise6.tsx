import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Textinput1 from '../../componets/TextInput1';
import RegistHeader from '../../componets/RegistHeader';
import Button from '../../componets/Button';

export default function Login() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const onSignIn = () => {
    console.log(name)
    console.log(username)
    console.log(email)
    console.log(address)
    console.log(phone)
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RegistHeader/>

      {/* Input Name */}
      <Textinput1 placeholder="Masukan nama lengkap anda" onChangeText={event => setName(event)} />

      {/* Input Username */}
      <Textinput1 text='Username' placeholder='Masukan username anda' onChangeText={event => setUsername(event)} />

      {/* Input Email */}
      <Textinput1 text='Email' placeholder="Masukan email anda" onChangeText={event => setEmail(event)} />

      {/* Input Address */}
      <Textinput1 text='Address' placeholder='Masukan alamat anda' onChangeText={event => setAddress(event)} />
            
      {/* Input Phone Number */}
      <Textinput1 text='Phone Number' placeholder="Masukan Nomor telepon anda" onChangeText={event => setPhone(event)} />

      {/* Tombol Register */}
      <Button label='Register' color='#a926ebff' onPress={onSignIn} />
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
  }
});