import { createText, BaseTheme } from "@shopify/restyle";

const palette = {
  blueDark: "#0C0D34",
  blueLight: "rgba(12, 13, 52, 0.7)",

  black: "#0B0B0B",
  white: "#FFFFFF",
};

const theme: BaseTheme = {
  colors: {
    white: palette.white,
    titleText: palette.blueDark,
    bodyText: palette.blueLight,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: "SFProText-Bold",
      color: "white",
      textAlign: "center",
    },
    title: {
      fontSize: 28,
      fontFamily: "SFProText-Semibold",
      color: "titleText",
    },
    smTitle: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProText-Semibold",
      color: "titleText",
    },
    body: {
      fontSize: 16,
      lineHeight: 30,
      fontFamily: "SFProText-Regular",
      color: "bodyText",
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export const Text = createText<Theme>();
export default theme;
