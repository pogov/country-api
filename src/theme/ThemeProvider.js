const lightTheme = {
  cardBackgroundColor: "white",
  mainBackgroundColor: "hsl(0, 0%, 98%)",
  elements: "hsl(0, 0%, 100%)",
  text: "hsl(200, 15%, 8%)",
  barColor: "rgba(230, 230, 230, 0.8)"
};

const darkTheme = {
  cardBackgroundColor: "hsl(209, 23%, 22%)",
  mainBackgroundColor: "hsl(207, 26%, 17%)",
  elements: "hsl(209, 23%, 22%)",
  text: "hsl(0, 0%, 100%)",
  barColor: "hsl(207, 26%, 17%)"
};

export const setTheme = mode => (mode === "dark" ? darkTheme : lightTheme);
