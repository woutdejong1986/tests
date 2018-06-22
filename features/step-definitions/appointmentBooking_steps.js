const expect = require('chai').expect;
const {Given, When, Then} = require('cucumber');
const assert = require('assert')
const HomePage = require('../../pages/homePage')
const { homepageSelectors } = require('./../../params')

const page = new HomePage

When('User clicks on book an appointment', function () {
    page.click(homepageSelectors[cartButton]);
    browser.waitForExist('.stores'); // test will fail without cuz stores page is not loaded quickly enough
})

When(/^Enters a city in search bar "([^"]*)"$/, function(title) {
    expect(browser.getTitle()).to.be.eql(title);    
})

Then('List with matching stores is provided', function () {
    var storesList = []
    storesList.push(browser.element(".stores-results .store-item"))
    console.log(storesList)
    // var storesList = browser.getElementByClassName('.stores-results').children;
    expect(storesList).to.have.length.above(2);
})