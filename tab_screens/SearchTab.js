import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../screens/Search";
import Filters from "../screens/Filters";
import Detail from "../screens/Detail";
import BackButton from "../components/BackButton";

const Stack = createNativeStackNavigator();

export default function SearchTab() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.mainColors.primary,
      },
      headerTintColor: colors.mainColors.secondary,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    >
      <Stack.Screen
        name="Home"
        component={Search}
        options={{ title: "Buscador de Pelis" }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={() => ({
          title: "Detall de Gif",
          headerLeft: () => <BackButton />,
        })}
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
