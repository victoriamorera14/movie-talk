import Home from "../screens/Home";
import Detail from "../screens/Detail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BackButton from "../components/BackButton";
import { colors } from "../utils/colors";

const Stack = createNativeStackNavigator();

export default function HomeTab() {
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
        name="Home"
        component={Home}
        options={
          { 
            headerTitle: "Home",            
          }
        }
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={() => ({
          title: "Detall de Gif",
          headerLeft: () => <BackButton />,
        })}
      />
    </Stack.Navigator>
  );
}
