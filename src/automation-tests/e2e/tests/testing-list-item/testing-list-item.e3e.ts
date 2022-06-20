import { LoginPage } from "@pages/login/login-pages";
import { SellingGeneralItemPage } from "@pages/category/sell/selling-item-pages";

    
    const loginPage = new LoginPage();
    const sellingGeneralItemPage = new SellingGeneralItemPage();
    
    beforeAll(async () => {
      await loginPage.gotoPage();
    });
  
    it('user login success', async () => {
      await loginPage.verifyUserProfileName();
    });

      beforeEach(async () => {
        await sellingGeneralItemPage.gotoSellingGeneralItemPage();
      })
