import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../screens/Search";
import Filters from "../screens/Filters";

const Stack = createNativeStackNavigator();

export default function SearchTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Search}
        options={{ title: "Buscador de Pelis" }}
      />
      <Stack.Screen
        name="Filters"
        component={Filters}
        options={() => ({
            title: "Detall de Gif",
            headerLeft: () => <BackButton />,
          })}
      />
    </Stack.Navigator>
  );
}
