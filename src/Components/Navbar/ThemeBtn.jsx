import { useEffect, useState } from "react";

const ThemeBtn = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("add");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handletheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div>
      <button onClick={handletheme}>{theme}</button>
    </div>
  );
};

export default ThemeBtn;
