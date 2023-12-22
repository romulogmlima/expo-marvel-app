import { StyleSheet } from "react-native";

import { palette } from "@/themes";

export const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 220,
    marginBottom: 8,
    alignItems: "center",
    backgroundColor: palette.black,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  name: {
    color: palette.white,
    fontSize: 14,
    lineHeight: 19.6,
    fontWeight: "500",
    textAlign: "center",
  },
  divider: {
    width: "100%",
    height: 5,
    backgroundColor: palette.alizarinCrimson,
    marginBottom: 4,
  },
  characterImage: {
    height: 160,
    width: 160,
    borderTopLeftRadius: 25,
  },
});
