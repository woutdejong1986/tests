const { Given, When, Then } = require("cucumber");
const BasePage = require("../../pages/basePage");
const expect = require('chai').expect
const button = ".app-header__nav-text"

const page = new BasePage

Then(/^The title of the page has to be "([^"]*)"$/, function (title) {
  page.assertTitle(title);
});

Then(/Book appointment button contains "([^"]*)"$/, function (text) {
  page.assertElementText(button, text);
});