import { darken } from "polished";

const defaultFontStack = [
  "Roboto",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Fira Sans",
  "Droid Sans",
  "Helvetica Neue",
  "sans-serif",
];

export const theme = {
  color: {
    primary: {
      default: "#80E0BE",
      dark: darken(0.1, "#80E0BE"),
    },
    neutral: {
      dark: "#363636",
      light: "#E5E5E5",
      white: "#FFFFFF",
    },
  },
  typography: {
    font: {
      display: ["Varela Round", ...defaultFontStack].join(","),
      regular: [...defaultFontStack].join(","),
    },
    size: {
      m: "16px",
      l: "20px",
      xl: "24px",
      xxl: "58px",
    },
  },
};
 