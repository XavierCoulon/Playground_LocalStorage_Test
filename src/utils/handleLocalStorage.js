const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const setLocalStorage = (key, value) => {
  const existing = getLocalStorage(key);
  if (existing) {
    existing.push(value);
    localStorage.setItem(key, JSON.stringify(existing));
  } else {
    localStorage.setItem(key, JSON.stringify([value]));
  }
};

export { getLocalStorage, setLocalStorage };
