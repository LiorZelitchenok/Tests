const puppeteer = require("puppeteer");
const actions = require("./actions");
const assert = require("assert");

let browser, page;
const loginUserData = {
  userName: "standard_user",
  password: "secret_sauce",
};

//Before each test
beforeEach(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  global.page = page;
  await page.goto("https://www.saucedemo.com/");
});

//After each test
afterEach(async () => {
  await browser.close();
});

test("test home page url", async () => {
  const url = await page.url();
  assert(url === "https://www.saucedemo.com/");
});

test("login on home page", async () => {
  await actions.setUserNameInput(loginUserData.userName);
  await actions.setPasswordInput(loginUserData.password);
  await actions.clickLoginSubmitButton();
  expect(page.url()).toMatch("https://www.saucedemo.com/inventory.html");
});

test("wrong username with correct password", async () => {
  await actions.setUserNameInput("wrongUserName");
  await actions.setPasswordInput(loginUserData.password);
  await actions.clickLoginSubmitButton();
  actions.checkForErrorMessage();
});

test("wrong password with correct username", async () => {
  await actions.setUserNameInput(loginUserData.userName);
  await actions.setPasswordInput("wrongPassword");
  await actions.clickLoginSubmitButton();
  actions.checkForErrorMessage();
});
