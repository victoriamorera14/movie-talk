import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../screens/Search";
import Filters from "../screens/Filters";
import Detail from "../screens/Detail";
import BackButton from "../components/BackButton";
import { colors } from "../utils/colors";
import FavoriteMark from "../components/FavoriteMark";

const Stack = createNativeStackNavigator();

export default function SearchTab() {
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
        name="Search"
        component={Search}
        options={{ title: "Buscador de Pelis" }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={(route) => ({
          title: "Detall de Gif",
          headerLeft: () => <BackButton />,
          headerRight: () => <FavoriteMark route={route} />
        })}
      />
      <Stack.Screen
        name="Filters"
        component={Filters}
        options={() => ({
          title: "Filter",
          headerLeft: () => <BackButton />,
        })}
      />
    </Stack.Navigator>
  );
}
