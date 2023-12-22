import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

import { palette } from "@/themes";

export const styles = StyleSheet.create({
  logo: { height: 50, width: 130 },
});

export const screenOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: palette.mineShaft,
  },
  headerTitleAlign: "center",
};
