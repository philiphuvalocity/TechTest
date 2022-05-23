import { Base } from '@pages/base';
import { BaseElements } from '@pages/base-elements';
import { roles } from '@config/sandbox-roles';

export class ListingDetailsPage extends Base {
  base = new BaseElements();

    public async enterDescriptionText (Title = 'as new condition'): Promise<void> {
        // adding listing listingTitleText
        await (await (this.base.descriptionText)).setValue(Title);
        console.log('============== Enter description details: Success =================');
    }

    public async PressListningPageNextButton (): Promise<void> {
        // wait for the search box to be displayed
        await (await (this.base.listningPagenextButton)).click();
        console.log('============== Press next button: Success =================');
    }

    public async enterStartPrice (Price = '350'): Promise<void> {
        // adding listing listingTitleText
        await (await (this.base.startPriceText)).setValue(Price);
        console.log('============== Enter start price: Success =================');
    }

    public async PricingPageNextButton (): Promise<void> {
        // wait for the search box to be displayed
        await (await (this.base.pricePagenextButton)).click();
        console.log('============== Press next button: Success =================');
    }

}
