const { Given, When, Then } = require('cucumber');
const CartPage = require('../../pages/cartPage')
const { filledCartSelectors, emptyCartSelectors } = require('./../../../params')

const cartPage = new CartPage

Given(/^User is in the shopping cart/, function () {
    cartPage.open('/cart')
})

When(/^User clicks on the shopping cart icon/, function () {
    cartPage.click(".cart-button")
});

Then(/^The shopping bag should empty/, function () {
    console.log(emptyCartSelectors)
    cartPage.validate(emptyCartSelectors)
});

Then(/^The shopping bag should be opened/, function () {
    cartPage.validate(emptyCartSelectors)
});