const expect = require('chai').expect;

class basePage {
    constructor(url) {
        this.url = "http://51.137.101.19/"
    }

    open () {
        browser.url(this.url);
    }

    click (selector) {
        browser.click(selector);
    }

    assertTitle (title) {
        expect(browser.getTitle().to.be.eql(title));
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
