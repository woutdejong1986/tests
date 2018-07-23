const { Given, When, Then } = require('cucumber');
import ProductDetailPage from '../../pages/productDetailPage'
const { productListPageSelectors, sunglassesDetailPageSelectors } = require('./../../../params')

const page = new ProductDetailPage

const sunglasses = ".app-nav__toggle*=Óculos de Sol"
const optics = ".app-nav__toggle*=Ótica"
const lenses = ".app-nav__toggle*=Lentes de Contacto"

When(/^User clicks on sunglasses in the menu$/, function () {
    page.click(sunglasses);
    page.validate(productListPageSelectors);
});

When(/^Chooses a product from the list$/, function () {
    page.click(".product-block");
    console.log(sunglassesDetailPageSelectors)
});

When(/^User clicks on optics in the menu$/, function () {
    page.click(optics);
});

When(/^User clicks on lenses in the menu$/, function () {
    page.click(lenses);
});

Then(/^The "([^"]*)" details page should be opened$/, function (productpage) {
    page.validate(sunglassesDetailPageSelectors);
});