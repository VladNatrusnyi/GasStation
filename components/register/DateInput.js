import {TextInput, StyleSheet, View, Touchable} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {useState} from "react";
import {InputTemplate} from "../UI/templates/InputTemplate";
import {COLORS} from "../../helpers/Colors";
import {useDispatch, useSelector} from "react-redux";
import {setBirthDate} from "../../store/registerSlice";

export const DateInput = () => {
  const dispatch = useDispatch()
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const birthDate = useSelector(state => state.register.birthDate)

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    dispatch(setBirthDate(selectedDate.toLocaleDateString('uk-UA')));
    hideDatePicker();
  };

  return (
    <InputTemplate text={'Дата народження'}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Виберіть вашу дату народження"
          value={birthDate}
          onTouchStart={showDatePicker}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </InputTemplate>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 44,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontSize: 18,
    color: 'black',

    // тінь
    elevation: 4,
    shadowColor: '#262626',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  }
});


