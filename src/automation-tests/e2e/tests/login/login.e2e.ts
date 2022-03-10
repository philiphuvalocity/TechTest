import { LoginPage } from '@pages/login/login-pages';

describe('Test the Login Process', () => {
  const loginPage = new LoginPage();

  beforeAll(async () => {
    await loginPage.gotoPage();
  });

  it('user login success', async () => {
    await loginPage.verifyUserProfileName();
  });
});
