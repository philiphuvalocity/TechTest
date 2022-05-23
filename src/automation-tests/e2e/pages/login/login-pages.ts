import { Base } from '@pages/base';
import { BaseElements } from '@pages/base-elements';
import { roles } from '@config/sandbox-roles';

export class LoginPage extends Base {
  base = new BaseElements();

  public async gotoPage (loginRole: any = roles.TESTUSER): Promise<void> {
    // check whether the system already login
    if (!(await this.waitForLogoutForm(false))) {
      // call the default login process
      await this.logIn(loginRole);
    }
    await browser.url('/default.aspx');
    let urlMatches = false;
    await this.timer(1);
    const url = await browser.getUrl();
    // check the url redirection
    if (!url.includes('/default.aspx')) {
      await browser.url('/default.aspx');
    } else {
      try {
        // check the default page is loaded
        await this.waitForTheSearchBox();
        urlMatches = true;
      } catch (error) {
        console.log(`========== Default page Load Error: ${error} ==========`);
      }
    }
    if (!urlMatches) {
      fail(`Failed to load default page. ${url}`);
    }
  }

  public async verifyUserProfileName (userFirstName = 'Auto'): Promise<void> {
    // wait for the search box to be displayed
    expect(await (await this.base.userProfileName).getText()).toContain(userFirstName);
    console.log('============== Verify User Profile Name : Success =================');
  }

  private async waitForTheSearchBox (): Promise<boolean> {
    // wait for the search box to be displayed
    return (await this.base.searchBox).isExisting();
  }

  private async selectCategoryList (): Promise<void> {
    // wait for the search box to be displayed
    (await this.base.sellCategoriesList).isExisting();
    (await this.base.sellCategoriesList).click();
    console.log('============== List General Item page : Success =================');
    (await this.base.selectGeneralItem).isExisting();
    (await this.base.selectGeneralItem).click();
       }
}
