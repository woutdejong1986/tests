const expect = require('chai').expect;
const { Given, When, Then } = require('cucumber');
const assert = require('assert')
const ProductListPage = require('../../pages/productListPage')
const { productListPageSelectors } = require('./../../params')

const selektor = browser.getText("div=Óculos de Sol");

const productListPage = new ProductListPage

Given(/^User is on the product list page$/, function () {
  productListPage.open();
  console.log(productListPageSelectors)
});

When(/^User clicks on sunglasses in the menu$/, function () {
  browser.element(".nav-bar__toggle").click("Óculos de Sol")
  // browser.element(".app-nav__toggle").element("Óculos de Sol").click()
  // browser.element(".app-nav__toggle").getText("Óculos de Sol").click()
  // console.log(browser.getText('div=Óculos de Sol'));
});

Then(/^Product list page should contain these elements$/, function() {
  productListPage.validate(productListPageSelectors);
});

