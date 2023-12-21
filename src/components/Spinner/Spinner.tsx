import React from "react";
import { ActivityIndicator } from "react-native";

export const Spinner = (): JSX.Element => (
  <ActivityIndicator accessibilityRole="spinbutton" size="large" color="#e62429" />
);
