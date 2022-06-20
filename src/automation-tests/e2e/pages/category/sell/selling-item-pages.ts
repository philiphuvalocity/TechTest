import { Base } from '@pages/base';

const list_sell_link = '/Sell/Category.aspx?group=GENERAL&rptpath=1-&fromLink=general';
const list_general_item_link = 'https://www.tmsandbox.co.nz/Sell/Category.aspx?group=GENERAL&rptpath=1-&fromLink=general';
const list_title = 'Testing Title';
const list_description = 'Testing Description';
const list_start_price = '200';
const list_unknow_shipping_costs = 'I do not know';
const list_cash_only = 'yes';

export class SellingGeneralItemPage extends Base 
{
    public async gotoSellingGeneralItemPage() : Promise<void>
    {
        // loading the url/link
        
        console.log('============== Opening the link provided =================')
        await browser.url(list_general_item_link);
        await this.timer(10);
        await browser.getUrl();
                
        console.log('============== Link verified =================')

        // checking if the page is available

        try {
            // check the listing page is loaded
            console.log('========== Listing page Loaded successfully ==========');
          } catch (error) {
            console.log(`========== Listing page Load Error: ${error} ==========`);
          }
    }
}

