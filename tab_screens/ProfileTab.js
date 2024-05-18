import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import Profile from "../screens/Profile";
import Favorites from "../screens/Favorites";
import BackButton from "../components/BackButton";
import { colors } from "../utils/colors";

const Stack = createNativeStackNavigator();

export default function ProfileTab() {

  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.mainColors.primary,
      },
      headerTintColor: colors.mainColors.secondary,
      headerTitleStyle:{
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
        name="Favourites"
        component={Favorites}
        options={() => ({
            title: "Lista de favoritos",
            headerLeft: () => <BackButton />,
          })}
      />
    </Stack.Navigator>
  );
}
