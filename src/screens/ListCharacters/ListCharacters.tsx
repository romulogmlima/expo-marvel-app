import React from "react";
import { FlatList, View } from "react-native";

import { styles } from "./styles";

import { CharacterCard, PageHeader, Spinner } from "@/components";
import { useCharacters } from "@/hooks/useCharacters";

export const ListCharacters = (): JSX.Element => {
  const { hasMoreData, listCharacters, isRefreshing, fetchCharacters, onRefresh } = useCharacters();

  return (
    <View style={styles.container}>
      <PageHeader
        title="MARVEL CHARACTERS LIST"
        subtitle="Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!"
      />
      <FlatList
        bounces={false}
        numColumns={2}
        keyExtractor={(item) => `${item.id}`}
        style={{ paddingHorizontal: 20 }}
        data={listCharacters}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
        showsVerticalScrollIndicator={false}
        onEndReached={({ distanceFromEnd }) => {
          if (distanceFromEnd < 0) return;
          fetchCharacters();
        }}
        onEndReachedThreshold={0.1}
        renderItem={({ item }) => <CharacterCard character={item} />}
        initialNumToRender={50}
        columnWrapperStyle={styles.columnWrapperStyle}
        ListFooterComponent={<Spinner animating={hasMoreData} />}
      />
    </View>
  );
};
