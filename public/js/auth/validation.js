export const isValidUsername = (username) => {
  let isValid;

  const usernameValidationRegex = /\w{5,}/g;
  isValid = usernameValidationRegex.test(username);

  return isValid;
};

export const isValidPassword = (password) => {
  let isValid;

  const passwordMinimumLength = 8;
  const passwordLength = password.length;
  const isPasswordLengthValid = passwordLength >= passwordMinimumLength;

  const passwordNumberValidationRegex = /\d{1,}/g;
  const hasPasswordAtLeastOneNumber =
    passwordNumberValidationRegex.test(password);

  const passwordUpperCaseRegex = /[A-ZÀ-Ú]/g;
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
