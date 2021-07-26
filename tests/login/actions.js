const elements = require("./login.elements");
module.exports = {
  setUserNameInput: async (userName) => {
    await page.type(elements.nameInput, userName);
  },
  setPasswordInput: async (password) => {
    await page.type(elements.passwordInput, password);
  },
  clickLoginSubmitButton: async () => {
    await page.click(elements.loginSubmitButton);
  },
  checkForErrorMessage: async () => {
    expect(await page.$(elements.errorMessageContainer)).not.toBeNull();
  },
};
