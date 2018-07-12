const { Given, When, Then } = require('cucumber');
const BlogPage = require('../../pages/blogPage');
const { blogPageSelectors } = require('./../../../params')
const blogSelector = ".app-nav__link*=Cuidados Visuais"

const blogPage = new BlogPage

When(/^User clicks on blog in the menu/, function () {
    blogPage.click(blogSelector);
})

Then(/^The blog page should be opened/, function () {
    blogPage.validate(blogPageSelectors);
})