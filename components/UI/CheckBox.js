import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {COLORS} from "../../helpers/Colors";

export const CheckBox = ({ isChecked, onToggle }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleToggle = () => {
    setChecked(!checked);
    onToggle(!checked);
  };

  return (
    <TouchableWithoutFeedback onPress={handleToggle}>
      <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
        {checked && <Feather name="check" size={25} color="#ffffff" />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 32,
    height: 32,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.primaryGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: COLORS.primaryGreen,
  },
});
