import {Image} from "react-native";

export const CustomIcon = ({name}) => {
  return (
    <Image
      source={require(name)}
    />
  )
}
