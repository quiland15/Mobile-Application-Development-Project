import react from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Text>Some Text</Text>
      <View>
        <Text>Some More text</Text>
        <Image source={{uri:'https://reactnative.dev/docs/assets/p_cat2.png',}}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue='You Can Type in me'
      />
    </ScrollView>
  );
};