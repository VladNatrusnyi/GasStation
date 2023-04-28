import {StyleSheet, View, Text} from 'react-native'
import {CustomBtn} from "../UI/buttons/CustomBtn";
import {COLORS} from "../../helpers/Colors";
import {useNavigation} from "@react-navigation/native";
export const StartRegister = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Зареєструйтесь для створення власного кабінету</Text>
      <CustomBtn text={'Зареєструватись'} padding={18} onPress={() => navigation.navigate('Registration')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
  },
  text: {
    textAlign: "center",
    color: COLORS.darkText,
    fontWeight: "bold",
    marginVertical: 32,
    fontSize: 18
  },
});
