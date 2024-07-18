import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

const TextAreaInput = () => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter multilines:</Text>
      <TextInput
        testID="text-area"
        style={styles.input}
        placeholder="Description"
        multiline={true}
        onChangeText={text => setValue(text)}
        value={value}
        blurOnSubmit={true} //THIS ALLOW CLOSE SOFTWARE KEYBOARD WITH \n
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    width: '80%',
  },
});

export default TextAreaInput;
