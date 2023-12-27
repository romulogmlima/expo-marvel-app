import { api } from "@/services/api";
import { PageParams, Wrapper } from "@/services/apiTypes";
import { Character } from "@/types";

const getList = async (params?: PageParams) => {
  const response = await api.get<Wrapper<Character>>("/characters", { params });
  return response.data;
};

export const characterService = {
  getList,
};
