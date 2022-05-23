import { Base } from '@pages/base';
import { BaseElements } from '@pages/base-elements';
import { roles } from '@config/sandbox-roles';

export class PhotoUploadPage extends Base {
  base = new BaseElements();

 public async pressPhotoRadioButton (): Promise<void> {
    // wait for the search box to be displayed
    await (await (this.base.continueWPButton)).click();
    console.log('============== Press continue without photo button: Success =================');
  }

}
