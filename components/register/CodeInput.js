import { View, TextInput, StyleSheet } from 'react-native';
import {useMemo, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCode} from "../../store/registerSlice";
import {COLORS} from "../../helpers/Colors";
import {InputTemplate} from "../UI/templates/InputTemplate";

export const CodeInput = ({isCodeSuccess}) => {
  const dispatch = useDispatch()
  const code = useSelector(state => state.register.code)
  const inputRefs = useRef([]);

  const handleInput = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;

    dispatch(setCode(newCode));

    // Focus on next input field
    if (value && index < code.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const statusStyle = useMemo(() => {
    if (isCodeSuccess === 'success') {
        return {
          borderWidth: 1,
          borderColor: COLORS.primaryGreen,
        }
    }
      if (isCodeSuccess === 'error') {
        return {
          borderWidth: 1,
          borderColor: COLORS.error,
        }
      }
      },
    [isCodeSuccess])

  return (
    <InputTemplate text={'Введіть код з SMS'}>
      <View style={styles.container}>
        {
          code.map((value, index) => {
            return (
              <TextInput
                key={index}
                style={{
                  ...styles.input,
                  ...statusStyle
              }}
                maxLength={1}
                keyboardType="numeric"
                onChangeText={(value) => handleInput(index, value)}
                value={code[index]}
                ref={(ref) => (inputRefs.current[index] = ref)}
              />
            )
          })
        }
      </View>
    </InputTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10
  },
  input: {
    width: 45,
    height: 44,
    fontSize: 24,
    textAlign: 'center',

    // borderWidth: 1,
    // borderColor: 'red',

    borderRadius: 10,
    backgroundColor: COLORS.light,
    // тінь
    elevation: 4,
    shadowColor: '#262626',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
});
