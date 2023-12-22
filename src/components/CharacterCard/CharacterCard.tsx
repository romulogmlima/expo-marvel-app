import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import { ImageVariant } from "@/constants/images";
import { getImageUri } from "@/helpers";
import { Character } from "@/types";

type CharacterCardProps = {
  character: Character;
};

export const CharacterCard = ({ character }: CharacterCardProps): JSX.Element => {
  const navigation = useNavigation();

  const goToDetailsScreen = () => navigation.navigate("CharacterDetails", { character });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={goToDetailsScreen}
      accessibilityRole="button">
      <Image
        source={{ uri: getImageUri(character.thumbnail, ImageVariant.PORTRAIT_MEDIUM) }}
        style={styles.characterImage}
        accessibilityRole="image"
        testID="character-image"
      />
      <View style={styles.divider} />
      <Text style={styles.name} accessibilityRole="text">
        {character.name}
      </Text>
    </TouchableOpacity>
  );
};
