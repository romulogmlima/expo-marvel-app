
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  logo: { height: 50, width: 130 },
});
export const screenOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: "#202020",
  },
  headerTintColor: "#FEFEFE",
  headerTitleAlign: "center",
};
