import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

const PasswordInput = () => {
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your password:</Text>
      <TextInput
        testID="password"
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
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
  },
});

export default PasswordInput;
