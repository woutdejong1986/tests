const expect = require('chai').expect;
const assert = require('assert');


class basePage {
    constructor(url) {
        this.url = "http://51.137.101.19"
    }

    open (path) {
        console.log(path)
        path === undefined ? browser.url(this.url) : browser.url(this.url + path);
    }

    click (selector) {
        browser.click(selector);
    }

    assertTitle (title) {
        expect(browser.getTitle()).to.be.equal(title);
    }

    assertElementText (selector, text) {
        expect(browser.element(selector).getText()).to.be.equal(text)
    }

    waitForVisibleElement (selector) {
        browser.waitForVisible(selector);
    }

    waitForVisibleElements (selectors) {
        selectors.forEach(selector => {
            console.log('waitForVisibleElements', selector)
            browser.waitForVisible(selector)
        });
    }

    validate (selectors) {
        this.waitForVisibleElements(selectors)
    }
    
}
module.exports = basePage
