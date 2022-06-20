//import { LoginPage } from "@pages/login/login-pages";
import { SellingGeneralItemPage } from "@pages/category/sell/selling-item-pages";

describe('Test the Login Process and Selling General Item', () => {
    const sellingGeneralItemPage = new SellingGeneralItemPage();
    //const loginPage = new LoginPage();
    
    beforeAll(async () => {
        //await loginPage.gotoPage();
        //await loginPage.verifyUserProfileName();
      });

      beforeEach(async () => {
        await sellingGeneralItemPage.gotoSellingGeneralItemPage();
      })
      
});