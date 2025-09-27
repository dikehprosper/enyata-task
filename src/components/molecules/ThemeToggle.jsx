// src/components/ThemeToggle/ThemeToggle.jsx
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import {Sun, Moon} from "lucide-react"
const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
  <span
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? (
    <Sun className="h-[18px] w-[18px] text-white" />
  ) : (
    <Moon className="h-[18px] w-[18px] text-black" />
  )}
</span>

  );
};

export default ThemeToggle;
