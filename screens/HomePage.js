import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { useNavigation} from "@react-navigation/native";

import {BurgerButton} from "../components/UI/buttons/BurgerButton";
import {globalStyles} from "../helpers/SomeStyle";

import {useDispatch, useSelector} from "react-redux";
import {CarouselComponent} from "../components/CarouselComponent";
import {InfoTemplate} from "../components/UI/templates/InfoTemplate";
import {Badge} from "../components/UI/Badge";


export const HomePage = () => {
  // const navigation = useNavigation();
  // const dispatch = useDispatch()
  // const isRegistered = useSelector(state => state.register.isRegistered)
  // const currentUser = useSelector(state => state.register.currentUser)



  return (
    <View style={styles.wrapper}>

      <View style={styles.headerPanel}>
        <Image
          source={require('../assets/img/icons/notification-icon.png')}
        />
        <Image
          source={require('./../assets/img/small-logo.png')}
        />
        <BurgerButton />
      </View>

      <CarouselComponent />

      <InfoTemplate text={'Слідкуй за знижками'}>
        <Badge source={require('./../assets/img/icons/mainScreen/persent.png')} text={'Отримати персональну знижку'} />

        <View style={{flexDirection: 'row', marginTop: 18, justifyContent: 'space-between'}}>
          <View style={{width: '48%'}}>
            <Badge source={require('./../assets/img/icons/mainScreen/persent.png')} text={'Придбати пальне'} />
          </View>
          <View style={{ width: '48%'}}>
            <Badge source={require('./../assets/img/icons/mainScreen/station.png')} text={'Ціна на      пальне'} />
          </View>
        </View>
      </InfoTemplate>

      <InfoTemplate text={'Паливна картка'}>
        <Badge source={require('./../assets/img/icons/mainScreen/card.png')} text={'1208.80 грн'} >
          <Image source={require('./../assets/Group.png')} />
        </Badge>
      </InfoTemplate>

      <InfoTemplate text={'Карта АЗК САН'}>
        <Image source={require('./../assets/real-map.png')} style={{ width: '100%', resizeMode: 'cover',}}/>
      </InfoTemplate>


      {/*{*/}
      {/*  isRegistered && currentUser ?*/}
      {/*    <Text>Залогінений</Text>*/}
      {/*    :*/}
      {/*    <Text> НЕ Залогінений</Text>*/}
      {/*}*/}
    </View>

  )
}


const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: globalStyles.horizontalPadding
  },
  headerPanel: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 23
  },
});


