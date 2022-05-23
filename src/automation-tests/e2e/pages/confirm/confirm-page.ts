import { Base } from '@pages/base';
import { BaseElements } from '@pages/base-elements';
import { roles } from '@config/sandbox-roles';

export class ConfirmPage extends Base {
  base = new BaseElements();

 public async pressStartAuction (): Promise<void> {
    // wait for the search box to be displayed
    await (await (this.base.confirmDetailButton)).click();
    console.log('============== Press Start Auction Button: Success =================');
 }

}
