import { StyleSheet } from "react-native";

import { palette } from "@/themes";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.white,
    flex: 1,
  },
  characterImage: {
    height: 280,
  },
  boxCharacterName: {
    backgroundColor: palette.alizarinCrimson,
    paddingVertical: 10,
    paddingHorizontal: 4,
    alignItems: "center",
  },
  characterName: {
    color: palette.white,
    fontSize: 22,
    lineHeight: 25.2,
    fontWeight: "700",
    textAlign: "center",
  },
  boxComics: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  characterDescription: {
    fontSize: 16,
    lineHeight: 22.4,
  },
  headerTitle: {
    color: palette.black,
    fontSize: 18,
    lineHeight: 25.2,
    fontWeight: "700",
    marginBottom: 10,
    marginTop: 20,
  },
  noComicsMessage: {
    fontSize: 16,
    lineHeight: 22.4,
  },
});
