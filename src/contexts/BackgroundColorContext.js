import { createContext } from "react";

export const backgroundColors = {
  primary: "primary",
  dark: "black-states",
  green: "green",
};

export const BackgroundColorContext = createContext({
  changeColor: (color) => {},
});
