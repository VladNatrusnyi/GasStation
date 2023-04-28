import {Alert, View} from "react-native";
import {postUser} from "../../store/registerSlice";
import {RegistrationLayout} from "../../layouts/RegistrationLayout";
import {DateInput} from "../../components/register/DateInput";
import {useDispatch, useSelector} from "react-redux";
import {Agreement} from "../../components/register/Agreement";
import {useEffect} from "react";
import {useNavigation} from "@react-navigation/native";

export const BirthPage = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const isAgreeWithRules = useSelector(state => state.register.isAgreeWithRules)

  const { uid, birthDate, name, surname, currentUser } = useSelector(state => state.register)

  useEffect(() => {
    if (currentUser) {
      navigation.navigate('Home')
    }
  }, [currentUser])

  const registerUserInDB = () => {
    if (birthDate) {
      // Надсилаємо в бд
      dispatch(postUser(
        {
          uid,
          name,
          surname,
          birthDate
        }
      ))
    } else {
      Alert.alert('Error', 'Ви не ввели дату народження');
    }
  }

  return (
    <RegistrationLayout buttonPress={registerUserInDB} isBtnDisabled={!isAgreeWithRules} >
      <View style={{flex: 1,gap: 24}}>

        <DateInput />

        <Agreement/>

      </View>
    </RegistrationLayout>
  )
}
