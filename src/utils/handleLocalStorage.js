const setLocalStorage = (key, value) => {
  let existing = localStorage.getItem(key);

  existing = existing ? existing.split(",") : [];
  existing.push(value);
  localStorage.setItem(key, existing.toString());

  existing.forEach((element) => {
    console.log(element);
  });
};

export default setLocalStorage;
 