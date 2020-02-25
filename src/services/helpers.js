import shortid from 'shortid';

export const ids = {
  name: shortid.generate(),
  number: shortid.generate(),
  filter: shortid.generate(),
};

export const getLocal = key => JSON.parse(localStorage.getItem(key));

export const setLocal = (key, array) =>
  localStorage.setItem(key, JSON.stringify(array));
