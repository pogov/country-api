import React, { useEffect, useState } from "react";
import MainTemplate from "./templates/MainTemplate";
import Main from "./components/Main/Main";
import Details from "./components/Details/Details";
import DetailsRedirect from "./DetailsRedirect";
import MyContext from "./context/Context";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { setTheme } from "./theme/ThemeProvider";
import "./styles.css";

export default function App() {
  const [context, setContext] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [theme, setThemeState] = useState("light");

  const currentTheme = setTheme(theme);

  document.documentElement.style.setProperty(
    "--cardBackground",
    `${currentTheme.cardBackgroundColor}`,
  );
  document.documentElement.style.setProperty(
    "--background",
    `${currentTheme.mainBackgroundColor}`,
  );
  document.documentElement.style.setProperty("--text", `${currentTheme.text}`);

  document.documentElement.style.setProperty(
    "--bar",
    `${currentTheme.barColor}`,
  );

  const codes = context.map((item) => {
    return { code: item.alpha3Code, name: item.name };
  });

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setContext(data);
      });
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)"))
      setThemeState("dark");
  }, []);

  const contextValue = {
    context,
    setContext,
    filtered,
    setFiltered,
    codes,
    theme,
    setThemeState,
  };

  return (
    <MyContext.Provider value={contextValue}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/countries/:name" component={Details} />
            <Route
              path="/countries/redirect/:name"
              component={DetailsRedirect}
            />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </MyContext.Provider>
  );
}
