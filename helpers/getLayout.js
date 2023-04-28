import {ImageBackground, StyleSheet} from "react-native";

export const getLayout = (data) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('./../assets/img/background.png')}
    >
      {data}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    paddingTop: 60,
    // justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
    color: 'fff'
  },
});
