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
  get logoutButton () { return $('form[action*="/Members/Logout"]'); }

  // default search page
  get searchBox () { return $('input#searchString'); }
  get userProfileName () { return $('form[action*="/Members/Logout"] p'); }

  // select sell categories
  get sellCategoriesList () { return $('#SiteHeader_SiteTabs_sellLink'); }

  // general item page
  get selectGeneralItem ()  { return $('#SiteHeader_SiteTabs_sellGeneralItem'); }
  get categoryHeaderText () {return $('h2*=Get it sold'); }
  get listingTitleText () { return $('input#listing-title'); }
  get selectCategoryDropdown () { return $('//span[contains(text(), \'Select a category\')]'); }
  get selectBrowsAllCategoryDropdown () { return $('//span[contains(text(), \'Browse all categories\')]'); }
  get browsCategoryText () {return $('//div[contains(text(), \'Choose a\')]'); }
  get categoryList1 () {return $('//option[contains(text(), \'Electronics\')]'); }
  get subCategoryList () {return $('//option[contains(text(), \'Phone & fax\')]'); }
  get subCategoryList2 () {return $('//option[contains(text(), \'Answer phones\')]'); }
  get oneCategoryRadioButton () {return $('input#one-category-radio'); }
  get nextButton () {return $('input#submit_button'); }

  // category page
  get descriptionText () {return $('//textarea'); }
  get listingPageNextButton () {return $('input#submit1'); }

  // listing detail page
  get startPriceText () {return $('input#startPriceInput'); }
  get pricePageNextButton () {return $('input#submit1'); }

  // pricing page
  get deliveryIdkRadioButton () {return $('input#deliveryIdk'); }
  get paymentPageNextButton () {return $('input#submit1'); }

  // photo page
  get continueWPButton () {return $('input#ContinueUpload'); }

  // extras page
  get selectPackage () {return $('div#large'); }
  get submitPromoButton () {return $('button#promo-submit'); }

  //  confirm page
  get confirmDetailButton () {return $('input#submit_sell'); }

  // auction page
  get verifyAuction () {return $('header h1*=Your auckation '); }
}
