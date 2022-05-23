import { Base } from '@pages/base';
import { BaseElements } from '@pages/base-elements';
import { roles } from '@config/sandbox-roles';

export class PriceDetailsPage extends Base {
  base = new BaseElements();

    public async enterStartPrice (Price = '350'): Promise<void> {
        // adding listing listingTitleText
        await (await (this.base.startPriceText)).setValue(Price);
        console.log('============== Enter start price: Success =================');
    } 

    public async PricePageNextButton (): Promise<void> {
        // wait for the search box to be displayed
        await (await (this.base.pricePagenextButton)).click();
        console.log('============== Press next button: Success =================');
    }

}
