import { LoginPage } from '@pages/login/login-pages';
import { ListGeneralItemPage } from '@pages/sell/list-general-item-pages';

describe('Test the Process of Listing An Item', () => {
  const listGeneralItemPage = new ListGeneralItemPage();
  const loginPage = new LoginPage();

  beforeAll(async () => {
    // GIVEN the user has logged in.
    await loginPage.gotoPage();
    await loginPage.verifyUserProfileName();
  });

  beforeEach(async () => {
    // AND Choose-a-category page is loaded
    await listGeneralItemPage.gotoListGeneralItemPage();
  });

  it('user lists a general item successfully', async () => {
    // WHEN choose from the category
    await listGeneralItemPage.chooseCategory();
    // AND the description is filled in.
    await listGeneralItemPage.fillInDescription();
    // AND the Start Price is filled in.
    await listGeneralItemPage.fillInStartPrice();
    // AND payment and shipping is filled in.
    await listGeneralItemPage.fillInPaymentAndShipping();
    // AND photos are skipped.
    await listGeneralItemPage.skipPhotos();
    // AND a package is chosen.
    await listGeneralItemPage.choosePackage();
    // AND Start my Auction button is clicked
    await listGeneralItemPage.startMyAuction();
    // THEN text 'Your auction has started.' is displayed
    await listGeneralItemPage.verifyAuctionStartedText();
  });
});
