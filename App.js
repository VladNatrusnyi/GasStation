import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import RootNavigator from "./navigation/RootNavigator";
import { store } from './store/index'
import {Provider, useDispatch} from 'react-redux'
import {useEffect} from "react";

export default function App() {


  return (
    <Provider store={store}>
      <View style={{ flex: 1}} >
        <RootNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
