import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  SpacingProps,
  SpacingShorthandProps,
  backgroundColor,
  border,
  createRestyleComponent,
  layout,
  spacing,
  spacingShorthand,
} from "@shopify/restyle";
import { TouchableOpacityProps as RNTouchableOpacityProps, TouchableOpacity } from "react-native";

import { Theme } from "@/themes";

type RestyleTypes = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme>;

export type TouchableOpacityBoxProps = RNTouchableOpacityProps & RestyleTypes;

export const TouchableOpacityBox = createRestyleComponent<TouchableOpacityBoxProps, Theme>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);
