import {Text, View} from "react-native";
import {COLORS} from "../../../helpers/Colors";

export const InputTemplate = (props) => {
  return (
    <View>
      <Text style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: COLORS.darkText }}>{props.text}</Text>
      {props.children}
    </View>
  )

}
