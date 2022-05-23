import { Base } from '@pages/base';
import { BaseElements } from '@pages/base-elements';
import { roles } from '@config/sandbox-roles';

export class AuctionPage extends Base {
  base = new BaseElements();

  public async verifyScreenText (displaysText  = 'Your auction has started.'): Promise<void> {
    // wait for the search box to be displayed
    expect(await (await this.base.verifyAuction).getText()).toContain(displaysText);
    console.log('============== Verify User Profile Name : Success =================');
  }

}
