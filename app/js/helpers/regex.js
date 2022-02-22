export const isValidEmail = (value) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gim;

  return value.match(emailRegex);
};
