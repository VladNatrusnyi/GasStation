import { View, Text, Button } from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HeaderBackButton} from "react-navigation-stack";
import {getLayout} from "../helpers/getLayout";
import {BackButton} from "../components/UI/buttons/BackButton";
import {PhoneNumberPage} from "../screens/register-screens/PhoneNumberPage";
import {CodePage} from "../screens/register-screens/CodePage";
import {NamePage} from "../screens/register-screens/NamePage";
import {BirthPage} from "../screens/register-screens/BirthPage";


const Stack = createNativeStackNavigator();

export const RegisterStack = () => {
  return (
      <Stack.Navigator
        initialRouteName="first"
      >
        <Stack.Screen
          options={({ navigation }) => ({
            headerLeft: () => (
              <HeaderBackButton
                onPress={() => navigation.goBack()}
              />
            ),
            headerShown: false,
          })}
          name="PhoneNumber" >
          {() => getLayout(<PhoneNumberPage />)}
        </Stack.Screen>

        <Stack.Screen
          options={({ navigation }) => ({
            headerLeft: () => (
              <View style={{ paddingLeft: 10}}>
                <BackButton onPress={() => navigation.goBack()}/>
              </View>
            ),
            headerTitle: '',
            headerStyle: {
              backgroundColor: 'transparent',
              elevation: 0,
              marginLeft: 20
            },
            headerTransparent: true,
          })}
          name="Code" >
          {() => getLayout(<CodePage />)}
        </Stack.Screen>

        <Stack.Screen
          options={({ navigation }) => ({
            headerLeft: () => (
              <View style={{ paddingLeft: 10}}>
                <BackButton onPress={() => navigation.goBack()}/>
              </View>
            ),
            headerTitle: '',
            headerStyle: {
              backgroundColor: 'transparent',
              elevation: 0,
              marginLeft: 20
            },
            headerTransparent: true,
          })}
          name="Name" >
          {() => getLayout(<NamePage />)}
        </Stack.Screen>

        <Stack.Screen
          options={({ navigation }) => ({
            headerLeft: () => (
              <View style={{ paddingLeft: 10}}>
                <BackButton onPress={() => navigation.goBack()}/>
              </View>
            ),
            headerTitle: '',
            headerStyle: {
              backgroundColor: 'transparent',
              elevation: 0,
              marginLeft: 20
            },
            headerTransparent: true,
          })}
          name="BirthDate" >
          {() => getLayout(<BirthPage />)}
        </Stack.Screen>
      </Stack.Navigator>
  );
}
