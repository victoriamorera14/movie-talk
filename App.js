import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Constants from "expo-constants";
import useCustomFonts from "./hooks/useCustomFonts.js";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "./utils/colors";
import HomeTab from "./tab_screens/HomeTab.js";
import Ionicons from "@expo/vector-icons/Ionicons";
import ChatTab from "./tab_screens/ChatTab.js";
import SearchTab from "./tab_screens/SearchTab.js";
import ProfileTab from "./tab_screens/ProfileTab.js";
import TabIcon from "./components/TabIcon.js";

const Tab = createBottomTabNavigator();

export default function App() {
  const fontsLoaded = useCustomFonts();
  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: styles.tabBar,
            tabBarLabelStyle: { fontSize: 0 },
            tabBarInactiveTintColor: "grey",
            tabBarActiveTintColor: "blue",
          }}
        >
          <Tab.Screen
            name="HomeTab"
            component={HomeTab}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon name="home" focused={focused} />
              )
              //tabBarIcon: () => <Ionicons name="home" size={35} margin={5} color={colors.mainColors.gray2}/>,
              //title: "Home",
            }}
          ></Tab.Screen>
          <Tab.Screen
            name="ChatsTab"
            component={ChatTab}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon name="chatbox-ellipses-outline" focused={focused} />
              )
              /* tabBarIcon: ({ focused }) => (
                <TabIcon name="home" focused={focused} />
              ),
              title: "Home",*/
            }}
          ></Tab.Screen>
          <Tab.Screen
            name="SearchTab"
            component={SearchTab}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon name="search" focused={focused} />
              )
              /* tabBarIcon: ({ focused }) => (
                <TabIcon name="home" focused={focused} />
              ),
              title: "Home",*/
            }}
          ></Tab.Screen>
          <Tab.Screen
            name="ProfileTab"
            component={ProfileTab}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabIcon name="person" focused={focused} />
              )
              /* tabBarIcon: ({ focused }) => (
                <TabIcon name="home" focused={focused} />
              ),
              title: "Home",*/
            }}
          ></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

// function functionalStyles(colors) {
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.mainColors.gray,
    gap: 10,
    padding: 100,
  },

  tabBar: {
    backgroundColor: colors.mainColors.gray4,
    height:60,
    padding:5,
  },

  componentsTitle: {
    textAlign: "center",
  },

  showTitle: {},

  showRow: {
    flexDirection: "row",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 8,
  },
});
//   return styles;
// }
