import {Image} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {TouchableOpacity} from "react-native-gesture-handler";

export const BurgerButton = ({open}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Image
        source={require('../../../assets/img/icons/burger-menu-icon.png')}
      />
    </TouchableOpacity>
  )
}
