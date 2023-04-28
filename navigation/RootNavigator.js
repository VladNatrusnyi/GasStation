import {NavigationContainer} from "@react-navigation/native";
import MainStack from "./MainStack";
import AsyncStorage from '@react-native-async-storage/async-storage';


import { createStackNavigator } from '@react-navigation/stack';
import {RegisterStack} from "./RegisterStack";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import firebase from 'firebase/compat/app'

import {auth} from "../config/firebase";
import {getUserData, setIsRegistered, setUserId} from "../store/registerSlice";

const Stack = createStackNavigator();

export default function RootNavigator() {
  const dispatch = useDispatch()

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      // console.log('USERToken', user.refreshToken)
      if (user) {
        // зберегти токен аутентифікації в локальному сховищі
        await AsyncStorage.setItem('authToken', user.refreshToken);
        await AsyncStorage.setItem('userId', user.uid);
        dispatch(setIsRegistered(true))
      } else {
        dispatch(setIsRegistered(false));
      }
    });

    // перевірити наявність токену аутентифікації в локальному сховищі
    AsyncStorage.getItem('authToken').then((token) => {
      if (token) {
        dispatch(setIsRegistered(true))

        dispatch(setUserId(true))
      }
    });

    AsyncStorage.getItem('userId').then((userId) => {
      if (userId) {
        dispatch(setUserId(userId))
        // отримуємо дані користувача з БД
        dispatch(getUserData({userId}))
      }
    });
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
            headerShown: false,
          }}
      >
        <Stack.Screen name="Main" component={MainStack} />
        <Stack.Screen name="Registration" component={RegisterStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
