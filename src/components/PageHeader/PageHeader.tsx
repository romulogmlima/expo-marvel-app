import React from "react";

import { Box } from "../Box/Box";
import { Text } from "../Text/Text";

type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export const PageHeader = ({ title, subtitle }: PageHeaderProps): JSX.Element => (
  <Box
    height={180}
    marginBottom="s10"
    paddingHorizontal="s10"
    backgroundColor="redError"
    justifyContent="center"
    alignItems="center">
    <Text variant="headingSmall" fontWeight="900" marginBottom="s4">
      {title}
    </Text>
    <Text variant="paragraphSmall" textAlign="center">
      {subtitle}
    </Text>
  </Box>
);
