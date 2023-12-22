import React from "react";
import { Image, Text, View } from "react-native";

import { styles } from "./styles";

import { ImageVariant } from "@/constants";
import { getImageUri } from "@/helpers";
import { Comic } from "@/types";

type ComicCardProps = {
  comic: Comic;
};

export const ComicCard = ({ comic }: ComicCardProps): JSX.Element => (
  <View style={styles.container}>
    <Image
      source={{ uri: getImageUri(comic.thumbnail, ImageVariant.PORTRAIT_XLARGE) }}
      style={styles.comicImage}
      accessibilityRole="image"
      testID="comic-image"
    />
    <Text style={styles.title} accessibilityRole="text">
      {comic.title}
    </Text>
  </View>
);
