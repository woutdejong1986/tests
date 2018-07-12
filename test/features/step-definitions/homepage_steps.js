const { Given, When, Then } = require('cucumber');
const HomePage = require('../../pages/homePage');
const { homepageSelectors } = require('./../../../params')

const homepage = new HomePage

Given(/^User is on the homepage$/, function() {
  homepage.open();
  homepage.validate(homepageSelectors);
});