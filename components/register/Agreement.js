import {StyleSheet, Text, View} from "react-native";
import {CheckBox} from "../UI/CheckBox";
import {useDispatch, useSelector} from "react-redux";
import {setIsAgreeWithRules} from "../../store/registerSlice";

export const Agreement = () => {
  const dispatch = useDispatch()

  const isAgreeWithRules = useSelector(state => state.register.isAgreeWithRules)

  const handleToggle = (checked) => {
    dispatch(setIsAgreeWithRules(checked));
  };


  return (

    <View style={styles.container}>
      <Text style={styles.text}>Я погоджуюся з правилами програми</Text>
      <CheckBox isChecked={isAgreeWithRules} onToggle={handleToggle} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    width: '73%',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 4,
  }
});
