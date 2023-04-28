import {Image, StyleSheet, View, Text} from "react-native";
import {COLORS} from "../helpers/Colors";
import {CustomBtn} from "../components/UI/buttons/CustomBtn";
import {globalStyles} from "../helpers/SomeStyle";

export const RegistrationLayout = (props) => {
  return (
    <View style={styles.wrapper}>

      <View style={styles.logoWrapper}>
        <Image
          source={require('./../assets/img/bigLogo.png')}
        />
        <Text style={styles.logoText}>ПРОЦЕС РЕЄСТРАЦІЇ</Text>
      </View>

      <View style={{ flex: 1, }}>
        { props.children }
      </View>



      <CustomBtn text={'ДАЛІ'} onPress={props.buttonPress} padding={10} isDisabled={props.isBtnDisabled}/>
    </View>
  )
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 20,
    paddingHorizontal: globalStyles.horizontalPadding
  },
  logoWrapper: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 35
  },
  logoText: {
    fontSize: 20,
    fontWeight: "900",
    marginTop: 35,
    color: COLORS.darkText,
  }
});
