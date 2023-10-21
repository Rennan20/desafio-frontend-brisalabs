import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import All from "./pages/All";
import GlobalStyle from "./styles/GlobalStyle";
import { Outlet, Route, Routes, useNavigate, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import { useState } from "react";
import light from "./styles/themes/light";
import ThemeBtn from "./components/changetheme/ThemeBtn";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./services/Auth/ProtectedRouth";
import { AuthProvider } from "./services/Auth/AuthContext";

const App = () => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "dark" : "light");
  };

  const token = localStorage.getItem("token");

  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={isDarkTheme ? dark : light}>
          <GlobalStyle />
          <ThemeBtn toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          <Routes>
            <Route path="/" element={<Login />} />
            {/*    <Route path="/Home" element={<Home />} />
            <Route path="/Search" element={<Search />} /> */}
            <Route path="/Home" element={<ProtectedRoute component={Home} />} />
            <Route
              path="/Search"
              element={<ProtectedRoute component={Search} />}
            />

            <Route path="/All" element={<ProtectedRoute component={All} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
};

export default App;
