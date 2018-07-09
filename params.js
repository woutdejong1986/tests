// File with all the element selectors used in the tests. When a selector is changed, you only have to change it here.

// Selectors that should be available on all pages
const baseSelectors = [
    logo = ".app-header__logo",
    cartButton = ".cart-button",
    bookAppointmentButton = ".app-header .button--rounded",
    menu = ".app-nav__items",
    productPages = ".app-nav__toggle",
    footer = ".app-footer__container"
]

// Selectors specific for the homepage
const homepageSelectors = [
    voucher= ".notification-bar",
    carousel= ".image-gallery--carousel",
    bookAppointmentBlock = ".book-appointment",
    promotionGroup = ".promotion-group",
    smartImageTags = ".smart-image-tags",
    productPromotions = ".product-promotions",
    promotionBannerGroup = ".promotion-banner-group",
    certificates = ".certificates-list"
].concat(baseSelectors);

// Selectors specific for product list page
const productListPageSelectors = [
    uspGroup = ".usp-group",
    productListerBanner = ".product-lister-banner",
    productSort = ".product-sort",
    // product = ".product-block",
    promotionBlock = ".promotion-block",
    discountBlock = ".product-listing__discount-block",
    showMore = ".product-listing__show-more .button"
].concat(baseSelectors);

// Selectors specific for empty shopping bag
const emptyShoppingBagSelectors = [
    emptyCartMessage = ".cart__empty-message"
].concat(baseSelectors);

// Selectors specific for filled shopping bag
const filledShoppingBagSelectors = [
    pricingDetails = ".pricing-details",
    cartNav = ".cart-nav",
    cartItem = ".cart-line-item"
].concat(baseSelectors);

module.exports = {
    baseSelectors,
    homepageSelectors,
    productListPageSelectors,
    emptyShoppingBagSelectors,
    filledShoppingBagSelectors
}