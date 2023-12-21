import { createTheme } from "@shopify/restyle";

export const palette = {
  alizarinCrimson: "#e62429",
  black: "#000000",
  white: "#FFFFFF",
};

export const theme = createTheme({
  colors: {
    ...palette,
    primaryContrast: palette.white,
    background: palette.white,
    backgroundContrast: palette.black,
    redError: palette.alizarinCrimson,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s8: 8,
    s12: 12,
    s16: 16,
  },
  textVariants: {
    headingLarge: {
      color: "white",
      fontSize: 32,
      lineHeight: 38.4,
    },
    headingMedium: {
      color: "white",
      fontSize: 22,
      lineHeight: 26.4,
    },
    headingSmall: {
      color: "white",
      fontSize: 18,
      lineHeight: 23.4,
    },
    paragraphLarge: {
      color: "white",
      fontSize: 18,
      lineHeight: 25.2,
    },
    paragraphMedium: {
      color: "white",
      fontSize: 16,
      lineHeight: 22.4,
    },
    paragraphSmall: {
      color: "white",
      fontSize: 14,
      lineHeight: 19.6,
    },
    paragraphCaption: {
      color: "white",
      fontSize: 12,
      lineHeight: 16.8,
    },
    paragraphCaptionSmall: {
      color: "white",
      fontSize: 10,
      lineHeight: 14,
    },
    defaults: {
      color: "white",
      fontSize: 16,
      lineHeight: 22.4,
    },
  },
});

export type Theme = typeof theme;

export type ThemeColors = keyof Theme["colors"];

export type TextVariants = keyof Theme["textVariants"];
