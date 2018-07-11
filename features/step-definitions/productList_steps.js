const { Given, When, Then, Step } = require('cucumber');
const ProductListPage = require('../../pages/productListPage')
const { productListPageSelectors } = require('./../../params')

const listpages = [
  "/sunglasses/all",
  "/optical/all",
  "/lenses"
]

const selektor = ".app-nav__toggle";

const productListPage = new ProductListPage

Given(/^User is on a product list page$/, function () {
  listpages.forEach(listpage => {
    productListPage.open(listpage);
    productListPage.validate(productListPageSelectors);
  });

});

When(/^User clicks on sunglasses in the menu$/, function () {
  productListPage.click(selektor);
});

Then(/^Product list page should contain these elements$/, function() {
  productListPage.validate(productListPageSelectors);
});