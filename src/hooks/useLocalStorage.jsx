import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  const setStored = (stored) => {
    const valueStore = stored instanceof Function ? stored(value) : stored;

    setValue(valueStore);
    localStorage.setItem(key, JSON.stringify(valueStore));
  };

  return [value, setStored];
}
