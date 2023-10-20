import React from "react";
import { Btn, Icon } from "./ThemeBtnStyles";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

interface ThemeBtnProps {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const ThemeBtn: React.FC<ThemeBtnProps> = ({ toggleTheme, isDarkTheme }) => {
  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <div>
      <Btn onClick={handleToggle}>
        <Icon>{isDarkTheme ? <MoonIcon /> : <SunIcon />}</Icon>
        {isDarkTheme ? "Tema escuro" : "Tema claro"}
      </Btn>
    </div>
  );
};

export default ThemeBtn;
