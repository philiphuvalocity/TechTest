import { LoginPage } from '@pages/login/login-pages';
import { GeneralItemPage } from '@pages/sell/generalitem-page';
import { ListingDetailsPage } from '@pages/listing/listing-page';
import { PriceDetailsPage } from '@pages/pricing/pricing-page';
import { PaymentDetailsPage } from '@pages/payment/payment-page';
import { PhotoUploadPage } from '@pages/photoupload/photo-page';
import { ExtrasPage } from '@pages/extras/extras-page';
import { ConfirmPage } from '@pages/confirm/confirm-page';
import { AuctionPage } from '@pages/auction/auction-page';

describe('Test general item selling process', () => {
  const loginPage = new LoginPage();
  const generalItemPage = new GeneralItemPage();
  const listingDetailsPage = new ListingDetailsPage();
  const priceDetailsPage = new PriceDetailsPage();
  const paymentDetailsPage = new PaymentDetailsPage();
  const photoUploadPage = new PhotoUploadPage();
  const extrasPage = new ExtrasPage();
  const confirmPage = new ConfirmPage();
  const auctionPage = new AuctionPage();

  beforeAll(async () => {
    await loginPage.gotoPage();
  });

  it('Select general item page', async () => {

    await loginPage.selectCategoryList();

    await generalItemPage.verifyCategoryPageHeaderText();
    await generalItemPage.populateListingTitle();
    await generalItemPage.selectBrowsAllCategoryDropdown();
    await generalItemPage.verifyBrowsCategoryPageText();
    await generalItemPage.selectCategoryListsForSellingItem();
    await generalItemPage.SelectOneCategoryRadioButton();
    await generalItemPage.PressNextButton();

    await listingDetailsPage.descriptionText();
    await listingDetailsPage.PressListingPageNextButton();

    await priceDetailsPage.enterStartPrice();
    await priceDetailsPage.PricePageNextButton();

    await paymentDetailsPage.pressRadioButton();
    await paymentDetailsPage.paymentPageNextButton();

    await photoUploadPage.pressPhotoRadioButton();

    await extrasPage.selectAnyPackage();
    await extrasPage.pressPromoButton();

    await confirmPage.pressStartAuction();

    await auctionPage.verifyAuctionTextText();

  });

});


