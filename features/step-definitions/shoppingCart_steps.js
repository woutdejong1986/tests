const expect = require('chai').expect;
const { Given, When, Then, Step } = require('cucumber');
const assert = require('assert')
const ShoppingCartPage = require('../../pages/shoppingCartPage')
const { emptyShoppingBagSelectors } = require('./../../params')

const cartPage = new ShoppingCartPage

Given(/^User is in the shopping cart/, function () {
    cartPage.open('/cart')
    // shoppingBagPage.waitForVisibleElement(".cart__nav")
})

When(/^User clicks on the shopping cart icon/, function () {
    cartPage.click(".cart-button")
});

Then(/^The shopping bag is empty/, function () {
    console.log(emptyShoppingBagSelectors)
    cartPage.validate(emptyShoppingBagSelectors)
});

Then(/^The shopping bag should be opened/, function () { () =>
    Step(/^The shopping bag is empty/)
    // doesn't work (yet)
});