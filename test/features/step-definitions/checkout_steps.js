const { Given, When, Then } = require('cucumber');
const CheckoutPage = require('./../../pages/checkoutPage')

const page = new CheckoutPage

When(/^User proceeds to checkout$/, function () {
    page.click(".button__text*=Finalizar compra")
});