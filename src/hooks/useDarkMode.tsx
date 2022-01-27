import { useEffect, useState } from "react";
import { Storage } from "@capacitor/storage";

export function useDarkMode(defaultMode: boolean = false) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(defaultMode);

  useEffect(() => {
    Storage.get({ key: "dark_mode" }).then(({ value }) => {
      const darkMode = value ? JSON.parse(value) : defaultMode;
      setDarkMode(darkMode);
    });
  }, [defaultMode]);

  const setDarkMode = (darkMode: boolean) => {
    document.body.classList.toggle("dark", darkMode);
    setIsDarkMode(darkMode);
    Storage.set({
      key: "dark_mode",
      value: JSON.stringify(darkMode),
    });
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return {
    isDarkMode,
    setDarkMode,
    toggleDarkMode,
  };
}
