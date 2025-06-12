import {ShadowBox} from 'react-native-neomorph-shadows';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from "react-native";
import {Ionicons, Entypo, MaterialCommunityIcons} from "@expo/vector-icons";
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const {width: SCREEN_WIDTH} = Dimensions.get("window");
const Menu = ({active, setActive}) => {
  const {bottom: bottomPadding} = useSafeAreaInsets();
  const menu = [
    {key: 'home', label: 'Asosiy', Icon: Entypo, name: 'home'},
    {key: 'create', label: 'Yaratish', Icon: Ionicons, name: 'add-circle'},
    {
      key: 'loads',
      label: 'Yuklar',
      Icon: MaterialCommunityIcons,
      name: 'clipboard-text-search'
    },
  ];

  const styles = StyleSheet.create({
    menuItem: {
      width: SCREEN_WIDTH * 0.33,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    menuContainer: {
      shadowColor: "#000",
      shadowOffset: {width: 5, height: 1},
      shadowOpacity: 0.2,
      shadowRadius: 10,
      borderRadius: 50,
      backgroundColor: '#fff',
      height: 80 + bottomPadding,
      width: SCREEN_WIDTH,
      display: "flex",
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'row',
      paddingBottom: bottomPadding,
    },
    text: {
      fontWeight: "bold",
    }
  })

  return (
      <ShadowBox style={styles.menuContainer}>
        {menu.map(({key, label, Icon, name}) => {
          const focused = active === key;
          const tint = focused ? '#2563EB' : '#000';
          return (
              <TouchableOpacity
                  key={key}
                  style={styles.menuItem}
                  onPress={() => setActive(key)}
              >
                <Icon name={name} size={30} color={tint}/>
                <Text style={[styles.text, {color: tint}]}>{label}</Text>
              </TouchableOpacity>
          );
        })}
      </ShadowBox>
  );
};
export default Menu;
