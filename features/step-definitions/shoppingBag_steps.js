const expect = require('chai').expect;
const { Given, When, Then, Step } = require('cucumber');
const assert = require('assert')
const ShoppingBagPage = require('../../pages/shoppingBagPage')
const { emptyShoppingBagSelectors } = require('./../../params')

const shoppingBagPage = new ShoppingBagPage

When(/^User clicks on the shopping cart icon/, function () {
    shoppingBagPage.click(".cart-button")
});

Then(/^The shopping bag is empty/, function () {
    console.log(emptyShoppingBagSelectors)
    shoppingBagPage.validate(emptyShoppingBagSelectors)
});

Then(/^The shopping bag should be opened/, function () { () =>
    Step(/^The shopping bag is empty/)
});