const { Given, When, Then } = require('cucumber');
const CampaignPage = require('../../pages/campaignPage');
const { campaignPageSelectors } = require('./../../../params')
const campaignSelector = ".app-nav__link*=Campanhas"

const page = new CampaignPage

When(/^User clicks on campaigns in the menu$/, function () {
    page.click(campaignSelector);
    page.validate(campaignPageSelectors);
})
