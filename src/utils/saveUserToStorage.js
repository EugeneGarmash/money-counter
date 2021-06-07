export const checkUserLogin = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const userIsAuthentificated = userData.email && userData.password; // BUT WE SHARE THE PASSWORD!!!
  return userIsAuthentificated ? true : false;
}

export const saveUserToStorage = userData => {
// console.log("🚀 ~ file: saveUserToStorage.js ~ line 8 ~ userData", userData);
  localStorage.setItem('userData', JSON.stringify(userData))
}

export default saveUserToStorage;