import {View, Text, StyleSheet} from 'react-native'
import {BurgerButton} from "../components/UI/buttons/BurgerButton";
import {BackButton} from "../components/UI/buttons/BackButton";
import {COLORS} from "../helpers/Colors";
import {globalStyles} from "../helpers/SomeStyle";
import {StartRegister} from "../components/register/StartRegister";
import {useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
export const PageLayout = ({ title, myPage = false, children }) => {
  const isRegistered = useSelector(state => state.register.isRegistered)
  const currentUser = useSelector(state => state.register.currentUser)
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.headerPanel}>
        <BackButton onPress={() => navigation.navigate('Home')}/>
        <Text style={styles.text}>{title}</Text>
        <BurgerButton />
      </View>
      <View style={styles.content}>
        {
          (!isRegistered && myPage) ? <StartRegister /> : <Text> {children} </Text>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerPanel: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 40,
    marginTop: 20,
    paddingHorizontal: globalStyles.horizontalPadding
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.darkText
  },
  content: {
    backgroundColor: '#fff',
    height: '100%',
    paddingHorizontal: globalStyles.horizontalPadding,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 50
  }
});
