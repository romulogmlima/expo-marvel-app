import { ImageVariant } from "@/constants/images";
import { Thumbnail } from "@/types";

export const getImageUri = (thumbnail: Thumbnail, variant: ImageVariant) => {
  const imageUri = thumbnail?.path + variant + thumbnail?.extension;
  return imageUri;
};
