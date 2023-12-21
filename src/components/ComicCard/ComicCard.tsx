import React from "react";
import { Image } from "react-native";

import { Box } from "../Box/Box";
import { Text } from "../Text/Text";

import { ImageVariant } from "@/constants/images";
import { getImageUri } from "@/helpers";
import { Comic } from "@/types";

type ComicCardProps = {
  comic: Comic;
};

export const ComicCard = ({ comic }: ComicCardProps): JSX.Element => (
  <Box height={260} width={150} marginRight="s10">
    <Image
      source={{ uri: getImageUri(comic.thumbnail, ImageVariant.PORTRAIT_XLARGE) }}
      style={{ height: 225 }}
    />

    <Text variant="paragraphCaption" color="black">
      {comic.title}
    </Text>
  </Box>
);
