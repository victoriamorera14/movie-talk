import { useFonts } from 'expo-font';

const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    'Ubuntu-Regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu-Bold': require('../assets/fonts/Ubuntu-Bold.ttf'),
    'Ubuntu-Italic': require('../assets/fonts/Ubuntu-Italic.ttf'),
    'Ubuntu-BoldItalic': require('../assets/fonts/Ubuntu-BoldItalic.ttf'),
    'Ubuntu-Light': require('../assets/fonts/Ubuntu-Light.ttf'),
    'Ubuntu-LightItalic': require('../assets/fonts/Ubuntu-LightItalic.ttf'),
    'Ubuntu-Medium': require('../assets/fonts/Ubuntu-Medium.ttf'),
    'Ubuntu-MediumItalic': require('../assets/fonts/Ubuntu-MediumItalic.ttf'),
  });

  return fontsLoaded;
};

export default useCustomFonts;
