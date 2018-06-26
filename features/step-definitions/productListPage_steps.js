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
  productListPage.click(".app-nav__toggle");
});

Then(/^Product list page should contain these elements$/, function() {
  productListPage.validate(productListPageSelectors);
});

