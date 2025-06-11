import {ShadowBox} from 'react-native-neomorph-shadows';
import {TouchableOpacity, Text, StyleSheet} from "react-native";
import {Ionicons, Entypo, MaterialCommunityIcons} from "@expo/vector-icons";

const Menu = ({active, setActive}) => {
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

const styles = StyleSheet.create({
  menuItem: {
    width: "33%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuContainer: {
    shadowColor: "#000",
    shadowOffset: {width: 5, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    width: "90%",
    height: 80,
    display: "flex",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontWeight: "bold",
  }
})
