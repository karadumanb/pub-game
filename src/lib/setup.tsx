import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { StyleProvider } from "native-base";
import React from "react";

const Setup: any = ({ children }: any) => {
  let [fontsLoaded] = useFonts({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),

    // Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    // Entypo: require("native-base/Fonts/Entypo.ttf"),
    // Feather: require("native-base/Fonts/Feather.ttf"),
    // FontAwesome: require("native-base/Fonts/FontAwesome.ttf"),
    // MaterialIcons: require("native-base/Fonts/MaterialIcons.ttf"),
    MaterialCommunityIcons: require("native-base/Fonts/MaterialCommunityIcons.ttf"),
    // Octicons: require("native-base/Fonts/Octicons.ttf"),
    // Zocial: require("@expo/vector-icons/fonts/Zocial.šttf"),
    // SimpleLineIcons: require("native-base/Fonts/SimpleLineIcons.ttf"),
    // EvilIcons: require("native-base/Fonts/EvilIcons.ttf"),
    // ...Ionicons.font,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return children;
}

export default Setup
