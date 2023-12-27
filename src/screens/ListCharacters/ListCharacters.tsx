import React from "react";
import { FlatList, View } from "react-native";

import { styles } from "./styles";

import { CharacterCard, PageHeader, Spinner } from "@/components";
import { useCharacters } from "@/hooks/useCharacters";
import { useRefreshByUser } from "@/hooks/useRefreshByUser";

export const ListCharacters = (): JSX.Element => {
  const { hasNextPage, listCharacters, fetchNextPage, isFetching, refetch } = useCharacters();
  const { isRefetchingByUser, refetchByUser } = useRefreshByUser(refetch);

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
        onRefresh={refetchByUser}
        refreshing={isRefetchingByUser}
        showsVerticalScrollIndicator={false}
        onEndReached={() => !isFetching && fetchNextPage()}
        onEndReachedThreshold={0.1}
        renderItem={({ item }) => <CharacterCard character={item} />}
        initialNumToRender={50}
        columnWrapperStyle={styles.columnWrapperStyle}
        ListFooterComponent={<Spinner animating={hasNextPage} />}
      />
    </View>
  );
};
