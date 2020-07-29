import { createText, createBox } from "@shopify/restyle";

const palette = {
  blueDark: "#0C0D34",
  blueLight: "rgba(12, 13, 52, 0.7)",

  grey: 'rgba(12, 13, 52, 0.05)',

  green: '#2CB9B0',

  black: "#0B0B0B",
  white: "#FFFFFF",
  

  // tift specific
  appGreen: '#3FC85F',
};

const theme = {
  colors: {
    white: palette.white,
    titleText: palette.blueDark,
    bodyText: palette.blueLight,
    grey: palette.grey,
    green: palette.green,
    welcomeGrey: '#F4F0EF',
    tiftGreen: palette.appGreen,
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
    button: {
      fontSize: 15,
      fontFamily: "SFProText-Regular",
      color: "bodyText",
      textAlign: 'center',
    }
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
