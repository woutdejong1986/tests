const { Given, When, Then } = require("cucumber");
const HomePage = require("../../pages/homePage");

Then(/^The title of the page has to be "([^"]*)"$/, function(title) {
    page.assertTitle(title);
  });