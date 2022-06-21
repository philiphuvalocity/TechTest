import 'dotenv/config';

import { BaseElements } from './base-elements';
import { Credentials } from '@type/credentials';

export class Base {
  base = new BaseElements();

  /**
  * Login Process
  *
  * @remarks N/A
  * @param credentials from @type/credentials
  * @returns N/A
  *
  */
  async logIn (credentials: Credentials): Promise<void> {
    try {
      console.log('============== Login: Start =================');
      await browser.url(browser.options.baseUrl + '/Members/Login.aspx?prompt=login&url=%2fdefault.aspx');
      // login process
      await browser.waitUntil(async () => (await (this.base.email)).isClickable());
      console.log(`============== ${credentials.PASSWORD} =================`);
      await (await (this.base.email)).setValue(credentials.USERNAME);
      await (await (this.base.password)).setValue(credentials.PASSWORD);
      console.log(`============== Waiting for Captcha - human I need you, you have 20 seconds =================`);
      await this.timer(20); 
      await (await (this.base.loginButton)).click();
      // wait for the login success
      await this.waitForLoginSuccess();
    } catch (error) {
      console.log(`============== Login: Failed ${error} =================`);
    }
  }

  public async timer (seconds = 0.5): Promise<void> {
    const time = new Date().getTime();
    while (new Date().getTime() < time + (seconds * 1000)) {
      await browser.pause(500);
    }
  }

  public async waitForLogoutForm (elementReverse = false) {
    try {
      await (await (this.base.logoutButton)).waitForDisplayed({
        reverse: elementReverse || false,
        timeoutMsg: 'Logout Form did not existed'
      });
      return true;
    } catch {
      return false;
    }
  }

  private async waitForLoginSuccess () {
    try {
      if (await this.waitForLogoutForm(false)) {
        console.log('============== Login: Success =================');
        return true;
      } else {
        console.log('============== Login: Failed =================');
        return false;
      }
    } catch (error) {
      console.log('============== Login: Failed =================');
      return false;
    }
  }
}
