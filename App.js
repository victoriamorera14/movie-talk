import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Constants from "expo-constants";
import useCustomFonts from "./hooks/useCustomFonts.js";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "./utils/colors";
import HomeTab from "./tab_screens/HomeTab.js";
import ChatTab from "./tab_screens/ChatTab.js";
import SearchTab from "./tab_screens/SearchTab.js";
import ProfileTab from "./tab_screens/ProfileTab.js";
import TabIcon from "./components/TabIcon.js";
import { useEffect, useState } from "react";
import { supabase } from "./utils/supabaseClient.js";
import LogIn from "./screens/LogIn.js";
import Register from "./screens/Register.js";
import BackButton from "./components/BackButton.js";
import { favorites } from "./utils/favorites.js";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    favorites.loadFavoritesFromStorage();
  }, [])

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setSession(session);
      } else if (event === "SIGNED_OUT") {
        setSession(null);
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  const fontsLoaded = useCustomFonts();

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <>
          {session ? (
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
                  ),
                }}
              />
              <Tab.Screen
                name="ChatsTab"
                component={ChatTab}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ focused }) => (
                    <TabIcon
                      name="chatbox-ellipses-outline"
                      focused={focused}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="SearchTab"
                component={SearchTab}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ focused }) => (
                    <TabIcon name="search" focused={focused} />
                  ),
                }}
              />
              <Tab.Screen
                name="ProfileTab"
                component={ProfileTab}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ focused }) => (
                    <TabIcon name="person" focused={focused} />
                  ),
                }}
              />
            </Tab.Navigator>
          ) : (
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: colors.mainColors.primary,
                },
                headerTintColor: colors.mainColors.secondary,
                headerTitleStyle: {
                  fontSize: 25,
                  fontFamily: "Ubuntu-Bold",
                  borderBottomColor: "white",
                  borderBottomWidth: 3,
                },
                headerTitleAlign: "center",
              }}
            >
              <Stack.Screen
                name="LogIn"
                component={LogIn}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={() => ({
                  title: "Register",
                  headerLeft: () => <BackButton />,
                })}
              />
            </Stack.Navigator>
          )}
        </>
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
    height: 60,
    padding: 5,
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
