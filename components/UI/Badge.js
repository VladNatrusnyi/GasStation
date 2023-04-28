import {Image, StyleSheet, View, Text} from "react-native";
import {COLORS} from "../../helpers/Colors";

export const Badge = ({source, text, children, width }) => {
  return (
    <View style={{...styles.wrapper, width: width}}>
      {/*<View style={styles.imageWrapper}>*/}
      {/*  <Image source={source} style={styles.image} />*/}
      {/*</View>*/}
      <Image source={source} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.text}>{text}</Text>
        { children }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    // alignItems: "center"
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 13,
    paddingHorizontal: 10,
    // тінь
    elevation: 4,
    shadowColor: '#262626',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  imageWrapper : {
    width: 33,
    height: 33,
    borderRadius: 50,
    backgroundColor: COLORS.light,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    marginRight: 12,
    width: 40,
    height: 40
  },
  text: {
    color: COLORS.darkText,
    fontWeight: "bold",
    fontSize: 18
  },
  content: {

    flexDirection: 'row',
    gap: 25,
    alignItems: "center",
    justifyContent: "space-between"
  }
});
