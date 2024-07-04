import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

const NumericInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (text: string) => {
    // Permite solo números
    const numericText = text.replace(/[^0-9]/g, '');
    setValue(numericText);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter a number:</Text>
      <TextInput
        testID="numeric-input"
        style={styles.input}
        value={value}
        onChangeText={handleChange}
        keyboardType="numeric"
        maxLength={10} // Cambia esto según la cantidad máxima de dígitos que necesites
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
    width: '80%',
    paddingHorizontal: 10,
  },
});

export default NumericInput;
