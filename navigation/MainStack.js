import {createDrawerNavigator} from "@react-navigation/drawer";
import {HomePage} from "../screens/HomePage";
import {StyleSheet, ImageBackground, Image, TouchableOpacity, Text, Button} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import sv from './../assets/img/sidebar-icons/home.png'
import {CouponsPage} from "../screens/СouponsPage";
import {PricesPage} from "../screens/PricesPage";
import {ActionsPage} from "../screens/ActionsPage";
import {MapPage} from "../screens/MapPage";
import {SingOutBtn} from "../components/UI/SingOutBtn";
import {MyOfficePage} from "../screens/MyOfficePage";
import {getLayout} from "../helpers/getLayout";

import firebase from 'firebase/compat/app'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setIsRegistered} from "../store/registerSlice";
import {useDispatch} from "react-redux";




const Drawer = createDrawerNavigator();

// const getLayout = (data) => {
//   return (
//     <ImageBackground
//       style={styles.background}
//       source={require('./../assets/img/background.png')}
//     >
//       {data}
//     </ImageBackground>
//   )
// }

// const isRegistered = false

const screensArr = [
  {
    name: 'Home',
    title: 'Головна сторінка',
    component: <HomePage/>,
    iconUrl: require('./../assets/img/sidebar-icons/home.png'),
    isNotVisible: true
  },
  {
    name: 'MyOffice',
    title: 'Мій кабінет',
    component: <MyOfficePage/>,
    iconUrl: require('./../assets/img/sidebar-icons/home.png')
  },
  {
    name: 'Coupons',
    title: 'Мої талони',
    component: <CouponsPage/>,
    iconUrl: require('./../assets/img/sidebar-icons/talon.png')
  },
  {
    name: 'Prices',
    title: 'Ціни',
    component: <PricesPage/>,
    iconUrl: require('./../assets/img/sidebar-icons/prise.png')
  },
  {
    name: 'Actions',
    title: 'Акції',
    component: <ActionsPage/>,
    iconUrl: require('./../assets/img/sidebar-icons/action.png')
  },
  {
    name: 'Maps',
    title: 'Карта АЗК',
    component: <MapPage/>,
    iconUrl: require('./../assets/img/sidebar-icons/maps.png')
  },
]






export default function MainStack() {

  const dispatch = useDispatch()

  // const handleLogout = async () => {
  //   try {
  //     await firebase.auth().signOut();
  //     console.log('Successfully logged out');
  //     await AsyncStorage.removeItem('authToken');
  //     dispatch(setIsRegistered(false));
  //   } catch (error) {
  //     console.log('Error logging out:', error);
  //   }
  // }

  return (
      <Drawer.Navigator
        screenOptions={{
        drawerPosition: "right",
        headerShown: false,
        drawerStyle: {
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          height: '100%',
          backgroundColor: '#00B488',
          width: 254,
          alignItems: 'center'
        },
      }}
        // initialRouteName="Home"
      >

        {
          screensArr.map(screen => {
            return (
              <Drawer.Screen
                key={screen.name}
                options={{
                  drawerIcon: () => <Image source={screen.iconUrl} />,
                  drawerItemStyle: {
                    justifyContent: 'flex-start',
                    height: screen.isNotVisible ? 0 : 'auto'
                  },
                  drawerLabel: () => (<Text
                    style={{
                      color: '#FCFFFE',
                      fontSize: 18,
                      fontWeight: 'bold',
                      marginBottom: 7,
                      marginLeft: -20
                    }}
                  >
                    {screen.title}
                  </Text>)
                }}
                name={screen.name}>
                {/*{() => <getLayout> {screen.component} </getLayout>}*/}
                {() => getLayout(screen.component)}
              </Drawer.Screen>
            )
          })
        }


        {/*кнопка для виходу */}
        <Drawer.Screen
          options={{
            drawerItemStyle: {
              marginTop:100,
              justifyContent: 'flex-start',
            },
            drawerLabel: () => <SingOutBtn />
          }}
          name="Notifications"
          style={{ marginTop: 50}}
          // onPress={handleLogout}
          >
          {() => getLayout(<HomePage/>)}
        </Drawer.Screen>
      </Drawer.Navigator>
  )
}



