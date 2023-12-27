import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { characterService } from "@/domain/Character/characterService";
import { Character } from "@/types";

export const useCharacters = () => {
  const [list, setList] = useState<Character[]>([]);
  const limit = 50;

  const { data, hasNextPage, fetchNextPage, isLoading, isFetching, refetch } = useInfiniteQuery({
    queryKey: ["characters"],
    queryFn: ({ pageParam }) => {
      console.log("[pageParams]: ", pageParam);
      return characterService.getList({ limit, offset: pageParam });
    },
    getNextPageParam: (lastPage) => {
      const offset = lastPage?.data.offset;
      const total = lastPage?.data.total;
      return offset + limit > total ? undefined : offset + limit;
    },
  });

  useEffect(() => {
    if (data) {
      const newList = data.pages.reduce<Character[]>((prev, curr) => {
        return [...prev, ...curr.data.results];
      }, []);
      setList(newList);
    }
  }, [data]);

  return {
    isRefreshing: isLoading,
    isFetching,
    fetchNextPage,
    hasNextPage,
    listCharacters: list,
    refetch,
  };
};
