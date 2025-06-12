import {useState} from "react";
import {StyleSheet} from 'react-native';
import HomeScreen from './src/screens/HomeScreen.js';
import UploadScreen from './src/screens/UploadScreen.js';
import LoadsScreen from './src/screens/LoadsScreen.js';
import Menu from "./src/components/Menu";
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
  const [active, setActive] = useState('home');
  const Screen = {
    home: HomeScreen,
    create: UploadScreen,
    loads: LoadsScreen,
  }[active];

  return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={["top"]}>
          <Screen/>
          <Menu active={active} setActive={setActive}/>
        </SafeAreaView>
      </SafeAreaProvider>
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
