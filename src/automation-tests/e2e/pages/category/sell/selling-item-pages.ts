import { Base } from '@pages/base';
import { BaseElements } from '@pages/base-elements';

const list_title = 'HP Computer';


export class SellingGeneralItemPage extends Base 
{
    public async gotoSellingGeneralItemPage() : Promise<void>
    {
        // loading the url/link
        
        console.log('============== Opening the link provided =================')

        await browser.url('/Sell/Category.aspx?group=GENERAL&rptpath=1-&fromLink=general');
        await this.timer(2);
        await browser.getUrl();

        try{

          await browser.waitUntil(async () => (await (this.base.listTitle)).isClickable());
          console.log(`============== Page loaded to add the new List =================`);   

        } catch (error) {
          console.log(`============== Error Page loaded to add the new List, Error: ${error} =================`);  
        }

        await (await (this.base.listTitle)).setValue(list_title);
        
        await this.timer(2);
        //await browser.getUrl();
        console.log(`============== Waiting for the Category to be selected =================`);                
        console.log('============== Link verified =================')
    }
}

