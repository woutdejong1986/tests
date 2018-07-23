const { Given, When, Then } = require('cucumber');
const CheckoutPage = require('./../../pages/checkoutPage')

const { addressFormSelectors } = require('./../../../params')

const page = new CheckoutPage

When(/^User proceeds to checkout$/, function () {
    page.click(".button__text*=Finalizar compra")
    page.validate(addressFormSelectors)
});

When(/^User fills in address form/, function () {
    page.setValue
})