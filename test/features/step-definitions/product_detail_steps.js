const { Given, When, Then } = require('cucumber');
import ProductDetailPage from '../../pages/productDetailPage'
const sunglassesDetailPageSelectors = require('./../../pages/productDetailPage')


const productDetailPage = new ProductDetailPage
console.log(productDetailPage.sunglassesDetailPageSelectors)

const sunglasses = ".app-nav__toggle*=Óculos de Sol"
const optics = ".app-nav__toggle*=Ótica"
const lenses = ".app-nav__toggle*=Lentes de Contacto"

When(/^User clicks on sunglasses in the menu the list page should be opened$/, function () {
    console.log(sunglassesDetailPageSelectors)
    console.log('that was it')
    productDetailPage.click(sunglasses);
})

When(/^User clicks on optics in the menu$/, function () {
    productDetailPage.click(optics);
})

When(/^User clicks on lenses in the menu$/, function () {
    productDetailPage.click(lenses);
})

Then(/^The "(.*?) details page should be opened$/, function () {

})