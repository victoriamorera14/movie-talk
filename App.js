import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "./utils/colors";
import { FlatList } from "react-native";
import Fetch from "./components/Fetch.js";
import HomeTab from "./tab_screens/HomeTab.js";
import Ionicons from "@expo/vector-icons/Ionicons";
import ChatTab from "./tab_screens/ChatTab.js";
import SearchTab from "./tab_screens/SearchTab.js";
import ProfileTab from "./tab_screens/ProfileTab.js";

{/*958f518b7c01a6e5b5898812c7a86c47*/}

const Tab = createBottomTabNavigator();

const fontLoaded = () =>
  useFonts({
    "Ubuntu-Bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
    "Ubuntu-Regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
    "Ubuntu-Medium": require("./assets/fonts/Ubuntu-Medium.ttf"),
  });

function ShowComponent({ name, children }) {
  const styles = functionalStyles(colors);
  return (
    <View style={styles.showContainer}>
      <Text style={styles.showTitle}>{name}</Text>
      <View style={styles.showRow}>{children}</View>
    </View>
  );
}

export default function App() {
  const styles = functionalStyles(colors);

  if (fontLoaded) {
    return (
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: { fontSize: 14 },
          tabBarInactiveTintColor: "grey",
          tabBarActiveTintColor: "blue",
        }}
        >
        
          <Tab.Screen
            name="HomeTab"
            component={HomeTab}
            options={
              {
                headerShown: false,

                tabBarIcon: () => (
                <Ionicons name="home" size={25}/>
              )
              //title: "Home",
              }
            }
          ></Tab.Screen>
          <Tab.Screen
            name="ChatsTab"
            component={ChatTab}
            options={
              {
                headerShown: false,
                tabBarIcon: () => (
                  <Ionicons name="chatbox-ellipses-outline" size={25}/>
                )
                /* tabBarIcon: ({ focused }) => (
                <TabIcon name="home" focused={focused} />
              ),
              title: "Home",*/
              }
            }
          ></Tab.Screen>
          <Tab.Screen
            name="SearchTab"
            component={SearchTab}
            options={
              {
                headerShown: false,
                tabBarIcon: () => (
                  <Ionicons name="search" size={25}/>
                ),
                /* tabBarIcon: ({ focused }) => (
                <TabIcon name="home" focused={focused} />
              ),
              title: "Home",*/
              }
            }
          ></Tab.Screen>
          <Tab.Screen
            name="ProfileTab"
            component={ProfileTab}
            options={
              {
                headerShown: false,
                tabBarIcon: () => (
                  <Ionicons name="person" size={25}/>
                ),
                /* tabBarIcon: ({ focused }) => (
                <TabIcon name="home" focused={focused} />
              ),
              title: "Home",*/
              }
            }
          ></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

function functionalStyles(colors) {
  const styles = StyleSheet.create({
    container: {
      paddingTop: Constants.statusBarHeight,
      flex: 1,
      backgroundColor: colors.mainColors.gray,
      gap: 10,
      padding: 100,
    },

    tabBar: {
      backgroundColor: colors.surface,
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
  return styles;
}
    
