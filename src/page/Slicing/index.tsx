import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Logo from '../../assets/img/Frame.svg';

export default function Slicing() {
  return(
  <View style={styles.container}>
    <Logo />
    <Text style={styles.title}>Money Tracker</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02CF8E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 32,
    fontWeight: '500',
  }
});