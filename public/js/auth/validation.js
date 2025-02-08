export const isValidUsername = (username) => {
  let isValid;

  const regexString = /\w{5,}/g;
  isValid = regexString.test(username);

  return isValid;
};

export const isValidPassword = (password) => {
  let isValid;

  const passwordLength = password.length;
  const passwordLengthValidation = passwordLength >= 8;

  const regexNumber = /\d{1,}/g;
  const passwordNumberValidation = regexNumber.test(password);

  const regexMayus = /[A-ZÀ-Ú]/g;
  const passwordLetterMayus = regexMayus.test(password);

  isValid =
    (passwordLengthValidation === passwordNumberValidation) ===
    passwordLetterMayus;

  return isValid;
};

export const isSamePassword = (password1, password2) => {
  let isSame;

  isSame = password2.includes(password1);

  return isSame;
};

export const isAdultAge = (age) => {
  let isAdult;

  const adultAge = 18;
  isAdult = age >= adultAge;

  return isAdult;
};
