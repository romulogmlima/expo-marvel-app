import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 220,
    marginBottom: 8,
    alignItems: "center",
    backgroundColor: "#000000",
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  name: {
    color: "#ffffff",
    fontSize: 14,
    lineHeight: 19.6,
    fontWeight: "500",
    textAlign: "center",
  },
  divider: {
    width: "100%",
    height: 5,
    backgroundColor: "#e62429",
    marginBottom: 4,
  },
  characterImage: {
    height: 160,
    width: 160,
    borderTopLeftRadius: 25,
  },
});
