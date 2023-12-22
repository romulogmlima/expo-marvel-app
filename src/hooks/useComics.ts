import { useEffect, useState } from "react";

import { api } from "@/services/api";
import { Comic } from "@/types";

export const useComics = (characterId: number) => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [loadingComics, setLoadingComics] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoadingComics(true);
      const response = await api.get(`/characters/${characterId}/comics`);

      setComics(response.data.data.results);
      setLoadingComics(false);
    })();
  }, []);

  return {
    comics,
    loadingComics,
  };
};
