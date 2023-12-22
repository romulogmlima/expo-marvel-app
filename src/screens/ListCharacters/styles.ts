import { StyleSheet } from "react-native";

import { palette } from "@/themes";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.white,
    flex: 1,
  },
  columnWrapperStyle: {
    justifyContent: "space-between",
    marginTop: 10,
  },
});
