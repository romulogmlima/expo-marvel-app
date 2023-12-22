import React from "react";
import { ActivityIndicator } from "react-native";

import { palette } from "@/themes";

type SpinnerProps = {
  animating?: boolean;
};

export const Spinner = ({ animating = true }: SpinnerProps): JSX.Element => (
  <ActivityIndicator
    animating={animating}
    accessibilityRole="spinbutton"
    size="large"
    color={palette.alizarinCrimson}
  />
);
