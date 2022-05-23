import { Base } from '@pages/base';
import { BaseElements } from '@pages/base-elements';
import { roles } from '@config/sandbox-roles';

export class ExtrasPage extends Base {
  base = new BaseElements();

 public async selectAnyPackage (): Promise<void> {
    // wait for the search box to be displayed
    await (await (this.base.selectPakage)).click();
    console.log('============== Choose a package: Success =================');
   }

 public async pressPromoButton (): Promise<void> {
    // wait for the search box to be displayed
    await (await (this.base.submitPromoButton)).click();
    console.log('============== Choose a package: Success =================');
   }

}
