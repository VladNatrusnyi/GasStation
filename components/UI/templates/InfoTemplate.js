import {StyleSheet, Text, View} from "react-native";
import {COLORS} from "../../../helpers/Colors";

export const InfoTemplate = (props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{props.text}</Text>
      <View style={styles.content}>
        {props.children}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10,
    width: '100%'
  },
  content: {

  },
  text: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 7,
    color: COLORS.darkText
  }
});
