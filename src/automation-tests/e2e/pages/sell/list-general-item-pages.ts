
import { browserTimeout5Secs } from '@const/timeoutConst';
import { Base } from '@pages/base';

const list_general_item_url = '/Sell/Category.aspx?group=GENERAL&rptpath=1-&fromLink=general';
const listing_title = 'iPhone 6s Plus';
const category_art = '339';
const category_digital_art = '5487';
const test_description = 'Test description.';
const start_price = '10';

export class ListGeneralItemPage extends Base {
  public async gotoListGeneralItemPage(): Promise<void> {
    await browser.url(list_general_item_url);
    await this.timer(1);
    await browser.getUrl();

    try {
      // check the listing page is loaded
      await (await this.base.listingTitle).isClickable();
      console.log('========== Listing page Loaded successfully ==========');
    } catch (error) {
      console.log(`========== Listing page Load Error: ${error} ==========`);
    }
  }

  public async chooseCategory(): Promise<void> {
    // Fill in listing title to get suggested categories
    await (await (this.base.listingTitle)).setValue(listing_title);
    await (await (this.base.categorySuggestionOption)).waitForDisplayed({ timeout: browserTimeout5Secs });
    await (await (this.base.categorySuggestionOption)).click();

    // choose categories.
    await this.base.categorySelect0.waitForDisplayed({ timeout: browserTimeout5Secs });
    await (await (this.base.categorySelect0)).selectByAttribute('value', category_art);
    await (await (this.base.digitalArtOption)).waitForDisplayed({ timeout: browserTimeout5Secs });
    await (await (this.base.categorySelect1)).selectByAttribute('value', category_digital_art);

    // choose List in only one category
    await (await (this.base.listInOneCategory)).waitForDisplayed({ timeout: browserTimeout5Secs });
    await (await (this.base.listInOneCategory)).click();

    // click on Next button
    await (await (this.base.next)).waitForEnabled();
    await (await (this.base.next)).click();

    console.log('========== Category form submitted. ==========');
  }

  public async fillInDescription(): Promise<void> {
    // fill in description
    await (await (this.base.description)).waitForDisplayed({ timeout: browserTimeout5Secs });
    await (await (this.base.description)).setValue(test_description);

    // click on Next button.
    await (await (this.base.next1)).click();
    console.log('========== Description submitted. ==========');
  }

  public async fillInStartPrice(): Promise<void> {
    // fill in Start Price
    await (await (this.base.startPrice)).waitForDisplayed({ timeout: browserTimeout5Secs });
    await (await (this.base.startPrice)).setValue(start_price);

    // click on Next button.
    await (await (this.base.next1)).click();
    console.log('========== Start Price submitted. ==========');
  }

  public async fillInPaymentAndShipping(): Promise<void> {
    // choose shipping
    await (await (this.base.shipping)).waitForDisplayed({ timeout: browserTimeout5Secs });
    await (await (this.base.shipping)).click();

    // choose payment method
    await (await (this.base.payment)).waitForDisplayed({ timeout: browserTimeout5Secs });
    await (await (this.base.payment)).click();

    // click on next button
    await (await (this.base.next1)).click();
    console.log('========== Payment method and shipping option submitted. ==========');
  }

  public async skipPhotos(): Promise<void> {
    // click on the next button
    await (await (this.base.skipButton)).waitForDisplayed({ timeout: browserTimeout5Secs });
    await (await (this.base.skipButton)).click();
    console.log('========== Photos skipped. ==========');
  }

  public async choosePackage(): Promise<void> {
    // choose a package
    await (await (this.base.mediumPackage)).waitForDisplayed({ timeout: browserTimeout5Secs });
    await (await (this.base.mediumPackage)).click();

    // click on the next button
    await (await (this.base.packageNext)).waitForEnabled({ timeout: browserTimeout5Secs });
    await (await (this.base.packageNext)).click();
    console.log('========== Package chosen. ==========');
  }

  public async startMyAuction(): Promise<void> {
    // Start the auction.
    await (await (this.base.startAuction)).waitForDisplayed({ timeout: browserTimeout5Secs });
    await (await (this.base.startAuction)).click();
    console.log('========== Auction started. ==========');
  }

  public async verifyAuctionStartedText(): Promise<void> {
    expect(await (await $('h1')).getText()).toContain('Your auction has started.');
    console.log('============== Verify listing a general item : Success =================');
  }

}
