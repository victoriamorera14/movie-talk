import { useColorScheme } from "react-native"
import { colors } from "../utils/colors";

export default function useThemeColors() {
    const theme = useColorScheme();
    const themeColors = colors[theme];
    return themeColors;
}