import {View, Text, StyleSheet} from 'react-native';

const LoadsScreen = () => {
  return (
      <View>
        <Text style={styles.title}>Yuklar ro'yxati</Text>
      </View>
  );
};

export default LoadsScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 500,
  }
})
