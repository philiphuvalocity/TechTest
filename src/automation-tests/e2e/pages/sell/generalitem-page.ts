import { Base } from '@pages/base';
import { BaseElements } from '@pages/base-elements';
import { roles } from '@config/sandbox-roles';

export class GeneralItemPage extends Base {
  base = new BaseElements();

      public async verifyCategoryPageHeaderText (HeaderText = 'Get it sold on Kiwis\' trusted marketplace'): Promise<void> {
            // wait for the page header to be displayed
            expect(await (await this.base.categoryHeaderText).getText()).toContain(HeaderText);
            console.log('============== Verify HeaderText : Success =================');
      }

      public async populateListingTitle (Title = 'test phone'): Promise<void> {
            // adding listing listingTitleText
            await (await (this.base.listingTitleText)).setValue(Title);
            console.log('============== Populate listing title: Success =================');
      }

      public async selectBrowsAllCategoryDropdown (): Promise<void> {
            // select category dropdown
            await (await (this.base.selectCategoryDropdown)).click();
            console.log('============== Select category dropdown : Success =================');
            // select brows category dropdown
            await (await (this.base.selectBrowsAllCategoryDropdown)).click();
            console.log('============== Select brows all category dropdown : Success =================');
      }

      public async verifyBrowsCategoryPageText (HeaderText = 'Choose a category for your listing'): Promise<void> {
            // verify page text
            expect(await (await this.base.browsCategoryText).getText()).toContain(HeaderText);
            console.log('============== Verify header text on category page: Success =================');
      }

      public async selectCategoryListsForSellingItem (): Promise<void> {
            // Select main category,sub category and sub sub category lists for item
            await (await (this.base.categoryList1)).click();
            console.log('============== Select category list: Success =================');

            await (await (this.base.subCategoryList)).click();
            console.log('============== Select sub category list: Success =================');

            await (await (this.base.subCategoryList2)).click();
            console.log('============== Select 2nd sub category list: Success =================');
      }

      public async SelectOneCategoryRadioButton (): Promise<void> {
            // wait for the search box to be displayed
            await (await (this.base.oneCategoryRadioButton)).click();
            console.log('============== Press List in only one category radio button: Success =================');
      }

      public async PressNextButton (): Promise<void> {
            // wait for the search box to be displayed
            await (await (this.base.nextButton)).click();
            console.log('============== Press next button: Success =================');
      }

}
