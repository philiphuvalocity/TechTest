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
  
  get sellButton () { return $('#SiteHeader_SiteTabs_sellLink');}

  get sellGeneralItem () { return $('a#SiteHeader_SiteTabs_sellGeneralItem');}

  get listTitle () { return $('input#listing-title'); }
  
  // option value 2 for Computers
  get categoryToSelect1 () { return $('option[value="2"]'); } 
  // option value 356 for Laptops
  get categoryToSelect2 () { return $('option[value="356"]'); }
  //option value 32 for Laptops
  get categoryToSelect3 () { return $('option[value="32"]'); } 
  //option value 2278 for HP
  get categoryToSelect4 () { return $('option[value="2278"]'); } 

  get listOnlyOneCategory () { return $('input#one-category-radio');}

  get nextButton () { return $('#submit_button');}

  get descriptionListDetails () { return $('#return ValidateTextArea(this,2048,null, event)');}

  get nextButtonListDetails () { return $('#submit1');}

  get startPrice () { return $('#startPriceInput');}

  get nextButtonPrice () { return $('#submit1');}

  get selectShipping () { return $('#deliveryIdk');}

  get paymentType () { return $('#payment_cash_on_pickup');}

  get nextButtonPayment () { return $('#submit1');}

  get continueNoPhoto () { return $('#ContinueUpload');}

  get selectBasic () { return $('#basic-selector');}

  get nextExtras () { return $('#promo-submit');}

  get startMyAuction () { return $('#submit_sell');}

  get auctionStarted () { return $('#Your auction has started.');}
  
}
