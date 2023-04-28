import { StyleSheet, Text, View } from 'react-native';

export const UserDataList = ({ currentUser }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{currentUser.name}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{currentUser.surname}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Date of birth:</Text>
          <Text style={styles.value}>{currentUser.birthDate}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { gap: 10 },
  item: { flexDirection: 'row', marginBottom: 10 },
  label: { fontWeight: 'bold', marginRight: 10, fontSize: 20},
  value: { fontSize: 20},
});
