const { Given, When, Then } = require('cucumber');
const ProductListPage = require('../../pages/productListPage')
const { productListPageSelectors } = require('./../../../params')

const sunglasses = ".app-nav__toggle*=Óculos de Sol",
optics = ".app-nav__toggle*=Ótica",
lenses = ".app-nav__toggle*=Lentes de Contacto"

const listpages = [
  // to keep this more generic, we might need to change the selectors. Maybe use the static links?
  sunglasses,
  optics,
  lenses
]

const productListPage = new ProductListPage

When(/^User clicks on product page in the menu$/, function () {
  listpages.forEach(listpage => {
    productListPage.click(listpage);
    productListPage.validate(productListPageSelectors);
    // this step takes a bit of time, increased timeout to make it pass
  });
});
