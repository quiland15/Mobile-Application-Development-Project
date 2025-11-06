import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function Exercise7() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.blackbox} />
        <View style={styles.yellowbox} />
        <View style={styles.blackbox} />
      </View>
      <View style={styles.container2}>
        <Image source={require ('../../assets/img/logo-with-motto-3.png')} style={styles.gambar} />
      </View>
      <View style={styles.container3}>
        <View style={styles.blackbox} />
        <View style={styles.yellowbox} />
        <View style={styles.blackbox} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  container2: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'space-evenly', //main axis
    alignItems: 'center', //cross axis
    backgroundColor: 'white',
  },
  blackbox: {
    marginLeft: '15',
    height: 70,
    width: 70,
    backgroundColor: 'black',
  },
  yellowbox: {
    marginLeft: '15',
    height: 70,
    width: 70,
    backgroundColor: 'yellow',
  },
  container3: {
    backgroundColor: 'blue',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  gambar: {
    width: '300',
    height: '68',
  }
});