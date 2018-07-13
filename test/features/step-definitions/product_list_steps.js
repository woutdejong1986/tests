const { Given, When, Then } = require('cucumber');
const ProductListPage = require('../../pages/productListPage')
const { productListPageSelectors, sunglasses, optics, lenses } = require('./../../../params')

const listpages = [
  sunglasses,
  optics,
  lenses
]

const page = new ProductListPage

When(/^User clicks on product page in the menu$/, function () {
  listpages.forEach(listpage => {
    page.click(listpage);
    page.validate(productListPageSelectors);
  });
});
