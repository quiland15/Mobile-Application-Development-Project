import react from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';

export default function App() {
  return (
      <View>
        <Text>1. static resource/local disk</Text>
        <Image style={styles.img} source={require('../ProjectMad/img/95b3ad21-f39e-4235-b774-2642d2cd20b9-removebg-preview.png')}/>
        <Text>2. network image</Text>
        <Image source={{uri:'https://reactnative.dev/docs/assets/p_cat2.png',}}
          style={styles.img}
        />
        <Text>3. base64 image</Text>
        <Image 
        style={styles.logo}
        source={{
          uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
          ,}}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  first: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  }
  , img: {
    width: 200, 
    height: 200
  }
  , logo: {
    width: 66,
    height: 58,
  }
})