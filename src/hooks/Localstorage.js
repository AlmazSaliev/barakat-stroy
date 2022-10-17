export const GetItem = ({ key }) => JSON.parse(localStorage.getItem(`${key}`));

export const SetItem = ({ key, body }) =>
  localStorage.setItem(`${key}`, JSON.stringify(body));

export const RemoveItem = ({ key }) => localStorage.removeItem(`${key}`);
