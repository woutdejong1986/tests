const { Given, When, Then } = require('cucumber');
const StoresPage = require('../../pages/storesPage');
const { storesPageSelectors, storesSelector, searchBar, searchButton } = require('./../../../params')

const page = new StoresPage

When(/^User clicks on stores in the menu$/, function () {
    page.click(storesSelector);
    page.validate(storesPageSelectors);
});

When(/^Enters a city of choice "([^"]*)"$/, function (city) {
    page.setValue(searchBar, city)
    page.click(searchButton)
});

When(/^Chooses a store from the list/, function () {
    page.click(".button__text*=Selecionar")
});

Then(/^The "([^"]*)" should be in the url/, function (storeID) {
    
});

Then(/^The appointment booking tool should be opened/, function () {
});