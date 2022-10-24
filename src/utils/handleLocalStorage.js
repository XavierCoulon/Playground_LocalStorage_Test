const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const setLocalStorage = (key, value) => {
  const initialValues = getLocalStorage(key);

  if (initialValues) {
    localStorage.removeItem(key);
    initialValues.push(value);
    localStorage.setItem(key, JSON.stringify(initialValues));
  } else {
    localStorage.setItem(key, JSON.stringify([value]));
  }
};

const removeItemLocalStorage = (key, value) => {
  const values = getLocalStorage(key).filter((skill) => skill !== value);
  localStorage.removeItem(key);
  localStorage.setItem(key, JSON.stringify(values));
};

export { getLocalStorage, setLocalStorage, removeItemLocalStorage };
