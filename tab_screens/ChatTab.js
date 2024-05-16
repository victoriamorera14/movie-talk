
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chats from "../screens/Chats";
import Chat from "../screens/Chat";

const Stack = createNativeStackNavigator();

export default function ChatTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatList"
        component={Chats}
        options={{ title: "Lista de chats" }}
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
