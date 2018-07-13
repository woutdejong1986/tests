const { Given, When, Then } = require('cucumber');
const StoresPage = require('../../pages/storesPage');
const { storesPageSelectors, storesSelector } = require('./../../../params')

const page = new StoresPage

When(/^User clicks on stores in the menu$/, function () {
    page.click(storesSelector);
});

Then(/^The stores page should be opened$/, function () {
    page.validate(storesPageSelectors);
});

When(/^Enters a store of choice$/, function () {

})