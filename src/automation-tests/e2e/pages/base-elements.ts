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
  get email () { return $('input#Email'); }
  get password () { return $('input#Password'); }
  get loginButton () { return $('button#SignIn'); }

  // logout
  get logoutButton () { return $('form[action*="Members/Logout"]'); }

  // default search page
  get searchBox () { return $('input#searchString'); }
  get userProfileName () { return $('form[action*="Members/Logout"] p'); }

  // sell page
  get listTitle () { return $('input#listing-title'); }
  get categoryToSelect () { return $('');}
  // option value 2 for Computers
  get categoryToSelect1 () { return $('option[value="2"]'); } 
  // option value 356 for Laptops
  get categoryToSelect2 () { return $('option[value="356"]'); }
  //option value 32 for Laptops
  get categoryToSelect3 () { return $('option[value="32"]'); } 
  //option value 2278 for HP
  get categoryToSelect4 () { return $('option[value="2278"]'); } 
  
}
