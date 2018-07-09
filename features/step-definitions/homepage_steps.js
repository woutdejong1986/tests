const { Given, When, Then } = require('cucumber');
const { assert } = require('chai');
const HomePage = require('../../pages/homePage');
const expect = require('chai').expect;
const { homepageSelectors } = require('./../../params')
const cartButton = ".cart-button"

const homepage = new HomePage

Given(/^User is on the homepage$/, function() {
  homepage.open();
});

Then(/^Homepage should at least contain these elements$/, function() {
  homepage.validate(homepageSelectors);
});