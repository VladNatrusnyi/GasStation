import {useNavigation} from "@react-navigation/native";
import {RegistrationLayout} from "../../layouts/RegistrationLayout";
import {PhoneInput} from "../../components/register/PhoneInput";

import {FirebaseRecaptchaVerifierModal} from "expo-firebase-recaptcha";
import {firebaseConfig} from "../../config/firebase";
import React, {useEffect, useRef} from "react";

import firebase from 'firebase/compat/app'
import {setPhoneNumber, setVerificationId} from "../../store/registerSlice";
import {useDispatch, useSelector} from "react-redux";

export const PhoneNumberPage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const phoneNumber = useSelector(state => state.register.phoneNumber)
  const verificationId = useSelector(state => state.register.verificationId)

  const recaptchaVerifier = useRef(null)


  useEffect(() => {
    if (verificationId) {
      navigation.navigate('Code')
    }
  }, [verificationId])

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider()
    phoneProvider
      .verifyPhoneNumber (phoneNumber, recaptchaVerifier.current)
      .then((id) => {
        dispatch(setVerificationId(id))
        console.log('IDDDD', id)
      });
  }


  return (
    <RegistrationLayout buttonPress={sendVerification} isBtnDisabled={false}>

      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier} firebaseConfig={firebaseConfig}
      />

      <PhoneInput />

    </RegistrationLayout>
  );
}
