import { useEffect, useState } from 'react';

export const useLocalStorage = (storageKey: string) => {
  const storedValue = localStorage.getItem(storageKey);
  const initialState = storedValue ? JSON.parse(storedValue) : null;

  const [value, setValue] = useState(initialState);

  console.log(value, '00000');
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};
