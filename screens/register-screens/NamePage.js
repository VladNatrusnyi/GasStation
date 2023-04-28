import {Alert, View} from "react-native";
import React, {useState} from "react";
import {MyTextInput} from "../../components/register/MyTextInput";
import {useDispatch, useSelector} from "react-redux";
import {setName, setSurname} from "../../store/registerSlice";
import {RegistrationLayout} from "../../layouts/RegistrationLayout";
import {useNavigation} from "@react-navigation/native";

export const NamePage = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation();

  const name = useSelector(state => state.register.name)
  const surname = useSelector(state => state.register.surname)

  const [isValidationSuccess, setIsValidationSuccess] = useState(null)


  const writeName = () => {
    if (!name && !surname) {
      setIsValidationSuccess('error')
      Alert.alert('Error', 'Ви не заповнили всі необхідні поля');
    } else {
      setIsValidationSuccess('success')
      navigation.navigate('BirthDate')
    }
  }

  return (
    <RegistrationLayout buttonPress={writeName} >
      <View style={{flex: 1,gap: 24}}>

        <MyTextInput
          isValidationSuccess={isValidationSuccess}
          label={'Ваще ім\'я'}
          onChangeText={(text) => dispatch(setName(text))}
          value={name}
          placeholder={'Введіть ім\'я'}
        />

        <MyTextInput
          isCodeSuccess={isValidationSuccess}
          label={'Ваще прізвище'}
          onChangeText={(text) => dispatch(setSurname(text))}
          value={surname}
          placeholder={'Введіть прізвище'}
        />

      </View>
    </RegistrationLayout>
  )
}
