export const isValidUsername = (username) => {
  let isValid;

  const usernameMinimumLength = 5;
  isValid = username.length >= usernameMinimumLength;

  return isValid;
};

export const isValidPassword = (password) => {
  let isValid;

  const passwordMinimumLength = 8;
  const isPasswordLengthValid = password.length >= passwordMinimumLength;

  const passwordNumberValidationRegex = /\d/;
  const hasPasswordAtLeastOneNumber =
    passwordNumberValidationRegex.test(password);

  const passwordUpperCaseRegex = /[A-ZÀ-Ú]/;
  const hasPasswordAtLeastOneUpperCaseLetter =
    passwordUpperCaseRegex.test(password);

  isValid =
    isPasswordLengthValid &&
    hasPasswordAtLeastOneNumber &&
    hasPasswordAtLeastOneUpperCaseLetter;

  return isValid;
};

export const isSamePassword = (password1, password2) => {
  let isSame;

  isSame = password1 === password2;

  return isSame;
};

export const isAdultAge = (age) => {
  let isAdult;

  const adultAge = 18;
  isAdult = age >= adultAge;

  return isAdult;
};
