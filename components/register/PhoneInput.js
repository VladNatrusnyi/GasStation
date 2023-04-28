import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import flagIcon from "../../assets/img/UA.png";
import {TextInputMask} from "react-native-masked-text";
import {useEffect} from "react";
import {COLORS} from "../../helpers/Colors";
import {AntDesign, Octicons} from "@expo/vector-icons";
import {InputTemplate} from "../UI/templates/InputTemplate";
import {useDispatch, useSelector} from "react-redux";
import {setPhoneNumber} from "../../store/registerSlice";

export const PhoneInput = ({ isEdit = false }) => {
  const dispatch = useDispatch()
  // const [phoneNumber, setPhoneNumber] = useState('+380');
  const phoneNumber = useSelector(state => state.register.phoneNumber)

  useEffect(() => {
   if (!phoneNumber.length) {
     dispatch(setPhoneNumber('+380'))
   }
  }, [phoneNumber])

  const handleClearInput = () => {
    dispatch(setPhoneNumber(''));
  };

  return (
    <InputTemplate text={'Введіть Ваш номер телефону'}>
      <View style={styles.wrapper}>
        <Image source={flagIcon} style={{ width: 30, height: 20 }} />
        <TextInputMask
          // autoFocus={true}
          type={'custom'}
          options={{
            mask: '+38(099) 999 99 99',
          }}
          placeholder="+38(0"
          keyboardType="phone-pad"
          style={ styles.input }
          value={phoneNumber}
          onChangeText={(text) => dispatch(setPhoneNumber(text))}
        />
        {phoneNumber.length > 0 && (
          <TouchableOpacity onPress={handleClearInput}>
            <View
              style={{
                backgroundColor: '#00BFA6',
                borderRadius: 50,
                width: 20,
                height: 20,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 10,
              }}
            >
              {
                isEdit ?
                  <Octicons name="pencil" size={14} color={COLORS.light} />
                  :
                  <AntDesign name="close" size={14} color={COLORS.light} />
              }
            </View>
          </TouchableOpacity>
        )}
      </View>
    </InputTemplate>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 20,
    backgroundColor: COLORS.light,
    // тінь
    elevation: 4,
    shadowColor: '#262626',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  input: {
    backgroundColor: COLORS.light,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 18,
    flex: 1,
    marginLeft: 10,
    color: 'black',
    fontWeight: 'bold'
  }
});
