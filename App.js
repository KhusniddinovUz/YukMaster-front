import {useState} from "react";
import {StyleSheet, SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/HomeScreen.js';
import Menu from "./src/components/Menu";

export default function App() {
  const [active, setActive] = useState('home');
  const Screen = {
    home: HomeScreen,
    create: HomeScreen,
    loads: HomeScreen,
  }[active];

  return (
      <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
        <Screen/>
        <Menu active={active} setActive={setActive}/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
