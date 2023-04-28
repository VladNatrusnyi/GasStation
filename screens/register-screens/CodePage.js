import {Alert, Text, TouchableOpacity, View} from "react-native";
import {RegistrationLayout} from "../../layouts/RegistrationLayout";
import {PhoneInput} from "../../components/register/PhoneInput";
import React, {useEffect, useRef, useState} from "react";
import {CodeInput} from "../../components/register/CodeInput";
import {COLORS} from "../../helpers/Colors";
import {useDispatch, useSelector} from "react-redux";

import firebase from 'firebase/compat/app'
import {getUser, getUserData, setCode, setUserId, setVerificationId} from "../../store/registerSlice";
import {firebaseConfig} from "../../config/firebase";
import {FirebaseRecaptchaVerifierModal} from "expo-firebase-recaptcha";
import {useNavigation} from "@react-navigation/native";

export const CodePage = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation();

  const code = useSelector(state => state.register.code).join('').trim()
  const verificationId = useSelector(state => state.register.verificationId)
  const phoneNumber = useSelector(state => state.register.phoneNumber)
  const currentUser = useSelector(state => state.register.currentUser)
  const isUserDataLoaded = useSelector(state => state.register.isUserDataLoaded)

  const [isCodeSuccess, setIsCodeSuccess] = useState(null)

  const recaptchaVerifier = useRef(null)

  useEffect(() => {
    if (currentUser) {
      navigation.navigate('Home')
    }
  }, [currentUser])

  useEffect(() => {
    if (isUserDataLoaded === 'notExist') {
      navigation.navigate('Name')
    }
  }, [isUserDataLoaded])

  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase.auth().signInWithCredential(credential)
      .then(async (data) => {
        console.log('DATTTAA', data)
        setIsCodeSuccess('success')
        // dispatch(setCode(['','','','']));
        await dispatch(setUserId(data.user.uid))
        await dispatch(getUserData({userId:data.user.uid, register: true}))
      })
      .catch((error) => {
        // show an alert in case of
        setIsCodeSuccess('error')
        // alert(error)
        Alert.alert(
          'Помилка',
          'Перевірте правильність коду'
        )
      })
  }


  const sendSecondVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider()
    phoneProvider
      .verifyPhoneNumber (phoneNumber, recaptchaVerifier.current)
      .then((id) => {
        dispatch(setVerificationId(id))
        // confirmCode()
      });
  }


  return (
    <RegistrationLayout buttonPress={confirmCode} isBtnDisabled={code.length !== 6}>

      <FirebaseRecaptchaVerifierModal
        size={'invisible'}
        ref={recaptchaVerifier} firebaseConfig={firebaseConfig}
      />

      <View style={{flex: 1,gap: 24}}>
        <PhoneInput />

        <CodeInput isCodeSuccess={isCodeSuccess}/>

        <TouchableOpacity onPress={sendSecondVerification}>
          <Text style={{ color: COLORS.darkText, textAlign: 'center', fontWeight: 'bold'}}>Надіслати код повторно</Text>
        </TouchableOpacity>
      </View>



    </RegistrationLayout>
  )
}
