import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";
import Favorites from "../screens/Favorites";
import BackButton from "../components/BackButton";
import { colors } from "../utils/colors";
import { observer } from "mobx-react-lite";
import Social from "../screens/Social";
import ChatTab from "./ChatTab";

const Stack = createNativeStackNavigator();

//export default function ProfileTab() {
export default observer(function ProfileTab() {
  return (
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
        name="Profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={() => ({
          title: "Lista de favoritos",
          headerLeft: () => <BackButton />,
        })}
      />
      <Stack.Screen
        name="Social"
        component={Social}
        options={() => ({
          title: "Lista de amigos",
          headerLeft: () => <BackButton />,
        })}
      />
      <Stack.Screen
        name="ChatTab"
        component={ChatTab}
        options={() => ({
          title: "Lista de chats",
          headerLeft: () => <BackButton />,
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
});
