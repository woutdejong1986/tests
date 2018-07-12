const { Given, When, Then } = require('cucumber');
const StoresPage = require('../../pages/storesPage');
const { storesPageSelectors } = require('./../../../params')
const storesSelector = ".app-nav__link*=Lojas"

const storesPage = new StoresPage

When(/^User clicks on stores in the menu/, function () {
    storesPage.click(storesSelector);
})

Then(/^The stores page should be opened/, function () {
    storesPage.validate(storesPageSelectors);
})