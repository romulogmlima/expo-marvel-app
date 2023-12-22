import { useState } from "react";

import { api } from "@/services/api";
import { Character } from "@/types";

export const useCharacters = () => {
  const [hasMoreData, setHasMoreData] = useState(true);
  const [isRefreshing, setRefreshing] = useState(false);
  const [listCharacters, setListCharacters] = useState<Character[]>([]);
  const [offset, setOffset] = useState(0);
  const limit = 50;

  async function onRefresh() {
    setRefreshing(true);
    setListCharacters([]);
    setOffset(0);
    setHasMoreData(true);
    setRefreshing(false);
  }

  async function fetchCharacters() {
    if (!hasMoreData) return;

    const url = `/characters?limit=${limit}&offset=${offset};`;
    const { data } = await api.get(url);

    const current = data.data.results;
    const total = data.data.total;

    setListCharacters((prev) => [...prev, ...current]);

    if (offset + limit > total) {
      setHasMoreData(false);
    } else {
      setOffset((prev) => prev + limit);
    }
  }

  return {
    isRefreshing,
    onRefresh,
    fetchCharacters,
    hasMoreData,
    listCharacters,
  };
};
