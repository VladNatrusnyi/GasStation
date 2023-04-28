import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {AntDesign} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {setIsRegistered} from "../../store/registerSlice";
import {useDispatch} from "react-redux";

import firebase from 'firebase/compat/app'
import {USER_LOGOUT} from "../../store";
export const SingOutBtn = () => {
  const dispatch = useDispatch()
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      console.log('Successfully logged out');
      await AsyncStorage.removeItem('authToken');
      await AsyncStorage.removeItem('userId');
      dispatch(setIsRegistered(false));
      dispatch({type: USER_LOGOUT})
    } catch (error) {
      console.log('Error logging out:', error);
    }
  }
  return (
    <TouchableOpacity onPress={handleLogout}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Вийти</Text>
        <AntDesign name="arrowright" size={24} color="#FCFFFE" />
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginRight: 10,
    color: '#FCFFFE',
    fontSize: 18,
    marginLeft: 15
  },
});
