import { api } from "@/services/api";
import { PageParams, Wrapper } from "@/services/apiTypes";
import { Comic } from "@/types";

const getComicsByCharacterId = async (characterId: number, params?: PageParams) => {
  const response = await api.get<Wrapper<Comic>>(`/characters/${characterId}/comics`, { params });
  return response.data;
};

export const comicService = {
  getComicsByCharacterId,
};
