import {Image} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

export const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={require('./../../../assets/img/icons/back-icon.png')}
      />
    </TouchableOpacity>
  )
}
