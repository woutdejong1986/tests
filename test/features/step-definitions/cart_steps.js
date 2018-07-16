const { Given, When, Then } = require('cucumber');
const CartPage = require('../../pages/cartPage')
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
    page.validate(emptyCartSelectors)
});

When(/^Navigates to sunglasses product list page/, function () {
    page.click(sunglasses)
})

When(/^Chooses a product from the list page/, function () {
    page.waitForVisibleElement(".product-block")
    page.click(".product-block")
    page.validate(sunglassesDetailPageSelectors)
})

When(/^Adds the product to his shopping cart/, function () {
    page.click(addToCartButton)
    page.waitForVisibleElement(".add-to-cart-notificationn")
})

When(/^User selects an item from product promotions/, function () {
    page.click(productPromotionHighlight)
})

Then(/^The shopping bag should be opened$/, function () {
    page.validate(emptyCartSelectors)
});