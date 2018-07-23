// File with all the element selectors used in the tests. When a selector is changed, you only have to change it here.

// Selectors that should be present on all pages
const logo = ".app-header__logo",
    cartButton = ".cart-button",
    bookAppointmentButton = ".app-header .button--rounded",
    menu = ".app-nav__items",
    productPages = ".app-nav__toggle",
    footer = ".app-footer__container",
    storesSelector = ".app-nav__link*=Lojas",
    sunglasses = ".app-nav__toggle*=Óculos de Sol",
    optics = ".app-nav__toggle*=Ótica",
    lenses = ".app-nav__toggle*=Lentes de Contacto"

 const baseSelectors = [
     logo,
     cartButton,
     bookAppointmentButton,
     menu,
     productPages,
     footer,
     storesSelector
    ]

// Selectors for the homepage
const voucher = ".notification-bar",
    carousel = ".image-gallery--carousel",
    carouselNavigation = ".gallery__nav",
    bookAppointmentBlock = ".book-appointment",
    promotionGroup = ".promotion-group",
    smartImageTags = ".smart-image-tags",
    productPromotions = ".product-promotions",
    productPromotionHighlight = ".product-promotions__wrapper--highlighted",
    promotionBannerGroup = ".promotion-banner-group",
    certificates = ".certificates-list"

const homepageSelectors = [
    ...baseSelectors,
    voucher,
    carousel,
    carouselNavigation,
    bookAppointmentBlock,
    promotionGroup,
    smartImageTags,
    productPromotions,
    promotionBannerGroup,
    certificates,
]

// Selectors for product list page
const uspGroup = ".usp-group",
    productListerBanner = ".product-lister-banner",
    productSort = ".product-sort",
    // product = ".product-block",
    promotionBlock = ".promotion-block",
    discountBlock = ".product-listing__discount-block",
    showMoreButton = ".product-listing__show-more .button"

const productListPageSelectors = [
    ...baseSelectors,
    uspGroup,
    productListerBanner,
    productSort,
    // product,
    promotionBlock,
    discountBlock,
    showMoreButton,
]

// Selectors for general product detail page
const productDiscount = ".product-discount-label",
    image = ".product-detail-image",
    thumbFront = ".button--front",
    thumbSide = ".button--side",
    brand = ".product-detail-title__brand",
    model = ".product-detail-title__model",
    price = ".price",
    description = ".product-detail-description",
    shippingReturnInfo  = ".product-detail-page__accordion"

const productDetailPageSelectors = [
    ...baseSelectors,
    uspGroup,
    productDiscount,
    image,
    thumbFront,
    thumbSide,
    brand,
    model,
    price,
    description,
    shippingReturnInfo
]

// Selectors for sunglasses detail page
const measurements = ".product-detail-frame-measurements__items",
    productFeatures = ".product-detail-features",
    addToCartButton = ".product-detail__cart-details .button"

const sunglassesDetailPageSelectors = [
    ...productDetailPageSelectors,
    measurements,
    productFeatures,
    addToCartButton
]

// Selectors for empty shopping cart
const emptyCartMessage = ".cart__empty-message"

const emptyCartSelectors = [
    ...baseSelectors,
    emptyCartMessage
]

// Selectors for filled shopping cart
const cartItemImage = ".cart-line-item__image",
    cartItemBrand = ".cart-line-item__title",
    cartItemModel = ".cart-line-item__number",
    deleteButton = ".cart-line-item__delete-btn",
    minusButton = ".icon.icon--minus",
    plusButton = ".icon.icon--plus",
    pricingDetails = ".pricing-details",
    cartNav = ".cart-nav",
    cartItem = ".cart-line-item"

const filledCartSelectors = [
    cartItemImage,
    cartItemBrand,
    cartItemModel,
    deleteButton,
    minusButton,
    plusButton,
    pricingDetails,
    cartNav,
    cartItem
]

// Selectors for the blog page
const blogPage = ".blog-page",
    headerItem = ".blog-hero",
    readHeaderItemButton = ".blog-hero__button",
    blogItem = ".blog-card",
    blogPageShowMoreButton = ".blog-list__show-more .button"

const blogPageSelectors = [
    ...baseSelectors,
    blogPage,
    headerItem,
    readHeaderItemButton,
    blogItem,
    blogPageShowMoreButton
]

// Selectors for the campaign page
const campaignItem = ".campaign-card"

const campaignPageSelectors = [
    ...baseSelectors,
    campaignItem
]

// Selectors for the stores page
const searchBar = ".form-control__input",
    searchButton = ".gv-store-search-form__submit",
    storesList = ".gv-store-list",
    storesOpeningHours = ".gv-store-item__opening-hours",
    storesMap = ".gv-store-finder__map"
    
const storesPageSelectors = [
    ...baseSelectors,
    searchBar,
    searchButton,
    storesList,
    // storesOpeningHours,
    storesMap
]

// Selectors for the checkout (pages)
const logoCheckout = ".logo",
    checkoutNav = ".checkout-nav",
    deliveryButton = ".radio-button-group__input",
    addressForm = ".address-form"


const checkoutSelectors = [
    logoCheckout,
    checkoutNav,
    deliveryButton,
    addressForm
]

module.exports = {
    homepageSelectors,
    productListPageSelectors,
    emptyCartSelectors,
    filledCartSelectors,
    blogPageSelectors,
    campaignPageSelectors,
    storesPageSelectors,
    storesPageSelectors,
    productDetailPageSelectors,
    sunglassesDetailPageSelectors,
    storesSelector,
    sunglasses,
    optics,
    lenses,
    searchBar,
    searchButton,
    cartButton,
    productPromotionHighlight,
    addToCartButton
}

