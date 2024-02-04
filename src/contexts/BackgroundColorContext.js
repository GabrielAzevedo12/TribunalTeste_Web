import { createContext } from "react";

export const backgroundColors = {
  primary: "primary",
  dark: "black-states",
  darklight: "darklight",
  green: "green",
};

export const BackgroundColorContext = createContext({
  changeColor: (color) => {},
});
