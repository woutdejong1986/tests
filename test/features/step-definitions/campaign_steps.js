const { Given, When, Then } = require('cucumber');
const CampaignPage = require('../../pages/campaignPage');
const { campaignPageSelectors } = require('./../../../params')
const campaignSelector = ".app-nav__link*=Campanhas"

const campaignPage = new CampaignPage

When(/^User clicks on campaigns in the menu/, function () {
    campaignPage.click(campaignSelector);
})

Then(/^The campaign page should be opened/, function () {
    campaignPage.validate(campaignPageSelectors);
})