import React from "react";

import { Box } from "@/components";
import { ThemeColors } from "@/themes";

type ScreenProps = {
  children: React.ReactNode;
  backgroundColor?: ThemeColors;
};

export const Screen = ({ children, backgroundColor = "grayWhite" }: ScreenProps): JSX.Element => {
  return (
    <Box flex={1} paddingHorizontal="s24" paddingTop="s48" backgroundColor={backgroundColor}>
      {children}
    </Box>
  );
};
