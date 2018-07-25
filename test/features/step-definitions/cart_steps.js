const { Given, When, Then } = require('cucumber');
const CartPage = require('../../pages/cartPage')
const addToCartNotification = ".add-to-cart-notification"
const { filledCartSelectors, 
    emptyCartSelectors,
    cartButton,
    productPromotionHighlight,
    sunglasses,
    sunglassesDetailPageSelectors,
    addToCartButton } = require('./../../../params')

const page = new CartPage

When(/^User clicks on the shopping cart icon$/, function () {
    page.click(cartButton)
});

When(/^User navigates to sunglasses product list page/, function () {
    page.click(sunglasses)
})

When(/^User chooses a product from the list page/, function () {
    // page.waitForVisibleElement(".product-block")
    page.click(".product-block")
    page.validate(sunglassesDetailPageSelectors)
})

When(/^User adds the product to his shopping cart/, function () {
    page.click(addToCartButton)
    page.waitForVisibleElement(addToCartNotification)
})

When(/^User selects an item from product promotions/, function () {
    page.click(productPromotionHighlight)
})

Then(/^The shopping bag should be opened without products$/, function () {
    page.validate(emptyCartSelectors)
});

Then(/^The shopping bag should be opened with products$/, function () {
    page.validate(filledCartSelectors)
});