import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import All from "./pages/All";
import GlobalStyle from "./styles/GlobalStyle";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import { useState } from "react";
import light from "./styles/themes/light";
import ThemeBtn from "./components/changetheme/ThemeBtn";
import NotFound from "./pages/NotFound";

const App = () => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "dark" : "light");
  };

  const token = localStorage.getItem("token");

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? dark : light}>
        <GlobalStyle />
        <ThemeBtn toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/Home" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/Search" element={<Search />} />
        </Routes>
        <Routes>
          <Route path="/All" element={<All />} />
        </Routes>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
