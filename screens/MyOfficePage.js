import {Text, StyleSheet} from 'react-native'
import {useNavigation} from "@react-navigation/native";
import {PageLayout} from "../layouts/PageLayout";
import {useSelector} from "react-redux";
import {UserDataList} from "../components/UserDataList";

export const MyOfficePage = () => {
  const navigation = useNavigation();

  const isRegistered = useSelector(state => state.register.isRegistered)
  const currentUser  = useSelector(state => state.register.currentUser)


  return (
    <PageLayout title={'Мій кабінет'} myPage={true}>
      <Text style={{marginBottom: 20}}>Сторінка мого кабінету</Text>
      { currentUser && <UserDataList currentUser={currentUser} /> }
    </PageLayout>
  )
}

const styles = StyleSheet.create({
});
