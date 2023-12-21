import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  characterImage: {
    height: 280,
  },
  boxCharacterName: {
    backgroundColor: "#e62429",
    paddingVertical: 10,
    paddingHorizontal: 4,
    alignItems: "center",
  },
  characterName: {
    color: "#ffffff",
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
    color: "#000000",
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
