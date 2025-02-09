export const checkCredentials = (username, password) => {
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  let areValidCredentials;

  areValidCredentials =
    username === storedUsername && password === storedPassword;

  return areValidCredentials;
};
