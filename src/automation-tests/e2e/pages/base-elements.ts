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

  // List Category page
  get listingTitle() { return $('input#listing-title'); }
  get categorySuggestionOption() { return $('div#category-suggester div.selectric-items>div>ul>li.last>span'); }
  get categorySelect0() { return $('select#selector_0'); }
  get categorySelect1() { return $('select#selector_1'); }
  get artOption() { return $('select#selector_0>option[value="339"]'); }
  get digitalArtOption() { return $('option[value="5487"]'); }
  get listInOneCategory() { return $('input#one-category-radio'); }
  get next() { return $('input#submit_button'); }

  // List Description page
  get description() { return $('form#newlisting_form table textarea[name="body"]'); }
  get next1() { return $('input#submit1'); }

  // List Price page
  get startPrice() { return $('input#startPriceInput'); }

  // List shipping and payment page
  get shipping() { return $('input#deliveryIdk'); }
  get payment() { return $('input#payment_cash_on_pickup'); }

  // List photo page
  get skipButton() { return $('input#ContinueUpload'); }

  // List package page
  get mediumPackage() { return $('div#medium'); }
  get packageNext() { return $('button#promo-submit'); }

  // Start the auction
  get startAuction() { return $('input#submit_sell'); }
}
