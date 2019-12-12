import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredPhone, setPhoneNumber] = useState('');
  const phoneInputHandler = (textNumber) => {
    setPhoneNumber(textNumber)
    console.log(enteredPhone)
  }
  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter your phone number" onChangeText={phoneInputHandler} />
      <Button title="AddNumber" onPress={text => console.log(enteredPhone)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
