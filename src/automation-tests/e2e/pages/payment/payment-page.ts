import { Base } from '@pages/base';
import { BaseElements } from '@pages/base-elements';
import { roles } from '@config/sandbox-roles';

export class PaymentDetailsPage extends Base {
  base = new BaseElements();

  public async pressRadioButton (): Promise<void> {
       // wait for the search box to be displayed
       await (await (this.base.deliveryIdkRadioButton)).click();
       console.log('============== Press radio button: Success =================');
   }

  public async pressNextButton (): Promise<void> {
       // wait for the search box to be displayed
       await (await (this.base.paymentPagenextButton)).click();
       console.log('============== Press radio button: Success =================');
   }

}
