import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
      <View>
        <Text style={styles.title}>Asosiy Sahifa</Text>
      </View>
  )
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 500,
  }
})
