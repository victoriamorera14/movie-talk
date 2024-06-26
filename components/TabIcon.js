import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../utils/colors";

export default function TabIcon({ name, focused }) {
  return (
    <Ionicons
      name={`${name}`}
      size={35}
      color={focused ? "white" : colors.mainColors.gray3}
    />
  );
}
