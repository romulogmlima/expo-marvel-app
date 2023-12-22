import { StyleSheet } from "react-native";

import { palette } from "@/themes";

export const styles = StyleSheet.create({
  container: {
    height: 160,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: palette.alizarinCrimson,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: palette.white,
    fontSize: 18,
    lineHeight: 23.4,
    fontWeight: "900",
    marginBottom: 8,
  },
  subtitle: {
    color: palette.white,
    fontSize: 14,
    lineHeight: 19.6,
    textAlign: "center",
  },
});
