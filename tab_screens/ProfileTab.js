import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import Profile from "../screens/Profile";
import Favourites from "../screens/Favourites";
import BackButton from "../components/BackButton";

const Stack = createNativeStackNavigator();

export default function ProfileTab() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
      <Stack.Screen
        name="Favourites"
        component={Favourites}
        options={() => ({
            title: "Detall de Gif",
            headerLeft: () => <BackButton />,
          })}
      />
    </Stack.Navigator>
  );
}
