const { Given, When, Then } = require('cucumber');
const BlogPage = require('../../pages/blogPage');
const { blogPageSelectors } = require('./../../../params')
const blogSelector = ".app-nav__link*=Cuidados Visuais"

const page = new BlogPage

When(/^User clicks on blog in the menu$/, function () {
    page.click(blogSelector);
    page.validate(blogPageSelectors);
})