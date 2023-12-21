import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

import { styles } from "./styles";

import { ComicCard, Spinner } from "@/components";
import { ImageVariant } from "@/constants/images";
import { getImageUri } from "@/helpers";
import { useComics } from "@/hooks/useComics";
import { RootStackParamList } from "@/routes/Routes";

type ScreenProps = NativeStackScreenProps<RootStackParamList, "CharacterDetails">;

export const CharacterDetails = ({ route }: ScreenProps): JSX.Element => {
  const { character } = route.params;
  const { comics, loadingComics } = useComics(character.id);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: getImageUri(character.thumbnail, ImageVariant.LANDSCAPE_LARGE) }}
        style={styles.characterImage}
      />
      <View style={styles.boxCharacterName}>
        <Text style={styles.characterName}>{character.name}</Text>
      </View>

      <View style={styles.boxComics}>
        <Text style={styles.headerTitle}>Description</Text>
        <Text style={styles.characterDescription}>
          {character.description || "There is no description for this character!"}
        </Text>

        <Text style={styles.headerTitle}>Comics</Text>

        {loadingComics ? (
          <Spinner />
        ) : (
          <FlatList
            data={comics}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <ComicCard comic={item} />}
            ListEmptyComponent={
              <Text style={styles.noComicsMessage}>There are no comics for this character!</Text>
            }
          />
        )}
      </View>
    </ScrollView>
  );
};
