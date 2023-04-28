import {useNavigation} from "@react-navigation/native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {StyleSheet, Text} from "react-native";
import {COLORS} from "../../../helpers/Colors";

export const CustomBtn = ({text, onPress, padding, isDisabled = false}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        ...styles.wrapper,
        paddingVertical: padding,
        backgroundColor: isDisabled ? COLORS.disabled : COLORS.primaryGreen,
    }}
      onPress={!isDisabled ? onPress : null}
    >
      <Text style={{
        ...styles.text,
      }}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: COLORS.primaryGreen,
    borderRadius: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.light
  },
});
