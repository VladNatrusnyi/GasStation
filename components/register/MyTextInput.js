import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import {COLORS} from "../../helpers/Colors";
import {InputTemplate} from "../UI/templates/InputTemplate";
import {useMemo} from "react";

export const MyTextInput = ({label, onChangeText, value, placeholder, isValidationSuccess}) => {

  const statusStyle = useMemo(() => {
      if (isValidationSuccess === 'success') {
        return {
          borderWidth: 1,
          borderColor: COLORS.primaryGreen,
        }
      }
      if (isValidationSuccess === 'error') {
        return {
          borderWidth: 1,
          borderColor: COLORS.error,
        }
      }
    },
    [isValidationSuccess])

  return (
    <InputTemplate text={label}>
      <TextInput
        style={{
          ...styles.input,
          ...statusStyle
        }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder={placeholder}
      />
    </InputTemplate>
  )
}


const styles = StyleSheet.create({
  input: {
    height: 44,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',

    // тінь
    elevation: 4,
    shadowColor: '#262626',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  }
});

