import Home from "../screens/Home";
import Detail from "../screens/Detail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

export default function HomeTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Buscador de Gifs" }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
      />
    </Stack.Navigator>
  );
}
