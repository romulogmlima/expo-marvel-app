import { useQuery } from "@tanstack/react-query";

import { comicService } from "@/domain/Comic/comicService";

export const useComics = (characterId: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["comics", characterId],
    queryFn: () => comicService.getComicsByCharacterId(characterId),
  });

  return {
    comics: data?.data.results,
    loadingComics: isLoading,
  };
};
