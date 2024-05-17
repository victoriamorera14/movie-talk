
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chats from "../screens/Chats";
import Chat from "../screens/Chat";
import BackButton from "../components/BackButton";
import { colors } from "../utils/colors";

const Stack = createNativeStackNavigator();

export default function ChatTab() {
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
        name="ChatList"
        component={Chats}
        options={
          { 
            title: "Lista de chats" 
          }
        }
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={() => ({
            title: "Detall de Gif",
            headerLeft: () => <BackButton />,
          })}
      />
    </Stack.Navigator>
  );
}
