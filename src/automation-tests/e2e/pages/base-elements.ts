/**
* Base element for login Page.
*
* @remarks N/A
* @param N/A
* @returns N/A
*
*/
export class BaseElements {
  // login
  get email () { return $('input#page_email'); }
  get password () { return $('input#page_password'); }
  get loginButton () { return $('button#LoginPageButton'); }

  // logout
  get logoutButton () { return $('form[action*="Members/Logout"]'); }

  // default search page
  get searchBox () { return $('input#searchString'); }
  get userProfileName () { return $('form[action*="Members/Logout"] p'); }
}
