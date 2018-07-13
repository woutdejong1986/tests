const { Given, When, Then } = require('cucumber');
const CartPage = require('../../pages/cartPage')
const { filledCartSelectors, emptyCartSelectors } = require('./../../../params')

const page = new CartPage

Given(/^User is in the shopping cart$/, function () {
    page.open('/cart')
})

When(/^User clicks on the shopping cart icon$/, function () {
    page.click(".cart-button")
});

Then(/^The shopping bag should empty$/, function () {
    console.log(emptyCartSelectors)
    page.validate(emptyCartSelectors)
});

Then(/^The shopping bag should be opened$/, function () {
    page.validate(emptyCartSelectors)
});