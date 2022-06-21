import { Base } from '@pages/base';
import { BaseElements } from '@pages/base-elements';

const list_title_add = 'HP Computer';
const list_decription_list_details_add = 'Old HP Computer to sell';
const list_start_price_add = '100';

export class SellingGeneralItemPage extends Base 
{
    public async gotoSellingGeneralItemPage() : Promise<void>
    {
      try {
        // can't open via browser.
        //(await this.base.sellButton).click();
        console.log('============== Selecting Sell and General Item - MANUAL =================');
        //await (await this.base.sellButton).selectByVisibleText("General item")
        await this.timer(10);
        console.log('============== General Item Selected =================');
        await this.waitForListingTileBox();
        console.log('============== Checking if Title is avaibale =================');
        await (this.base.listTitle).isClickable();
        await this.timer(2);
        console.log(`============== Adding Title =================`);
        await (this.base.listTitle).click();
        await (this.base.listTitle).setValue(list_title_add);
        await this.timer(2);
        console.log(`============== Title Added =================`);
        console.log('============== Selecting Category  - MANUAL =================');
        await this.timer(5);
                      
        console.log(`============== Selecting Other options =================`);

        await (await (this.base.categoryToSelect1)).isClickable();
        await (await this.base.categoryToSelect1).click();
        await this.timer(1);

        await (await (this.base.categoryToSelect2)).isClickable();
        await (await this.base.categoryToSelect2).click();
        await this.timer(1);

        await (await (this.base.categoryToSelect3)).isClickable();
        await (await this.base.categoryToSelect3).click();
        await this.timer(1);

        await (await (this.base.categoryToSelect4)).isClickable();
        await (await this.base.categoryToSelect4).click();
        await this.timer(1);

        await (await this.base.listOnlyOneCategory).isClickable();
        await (await this.base.listOnlyOneCategory).click();
        await this.timer(1);

        console.log(`============== Selecting Next =================`);

        await (await this.base.nextButton).isClickable();
        await (await this.base.nextButton).click();
        await this.timer(1);

        //could not find the correct function/class to find the element;
              
        //await (await (this.base.descriptionListDetails)).isClickable();
        //await (this.base.descriptionListDetails).click();
        //await (this.base.descriptionListDetails).setValue(list_decription_list_details_add);
        //await this.timer(1);

        await (await (this.base.nextButtonListDetails)).isClickable();
        await (this.base.nextButtonListDetails).click();
        await this.timer(1);
                
        await (await (this.base.startPrice)).isClickable();
        await (this.base.startPrice).click();
        await (this.base.startPrice).setValue(list_start_price_add);
        await this.timer(1);

        await (await (this.base.nextButtonPrice)).isClickable();
        await (this.base.nextButtonPrice).click();
        await this.timer(1);

        await (await this.base.selectShipping).isClickable();
        await (await this.base.selectShipping).click();
        await this.timer(1);

        await (await this.base.paymentType).isClickable();
        await (await this.base.paymentType).click();
        await this.timer(1);
        
        await (await (this.base.nextButtonPayment)).isClickable();
        await (this.base.nextButtonPayment).click();
        await this.timer(1);

        await (await (this.base.continueNoPhoto)).isClickable();
        await (this.base.continueNoPhoto).click();
        await this.timer(1);

        await (await (this.base.selectBasic)).isClickable();
        await (this.base.selectBasic).click();
        await this.timer(1);

        await (await (this.base.nextExtras)).isClickable();
        await (this.base.nextExtras).click();
        await this.timer(1);

        await (await (this.base.startMyAuction)).isClickable();
        await (this.base.startMyAuction).click();
        await this.timer(1);

        await this.waitForActionStartedNote();
        
        console.log(`============== Auction Started =================`);

        } catch (error) {
        console.log(`============== Error: Sell Page ${error} =================`);
      }
    }

private async waitForListingTileBox (): Promise<boolean> {
  // wait for the search box to be displayed
  return (await this.base.listTitle).isExisting();

}

private async waitForActionStartedNote (): Promise<boolean> {
  // wait for the search box to be displayed
  return (await this.base.auctionStarted).isExisting();

}
}
