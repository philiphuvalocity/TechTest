import 'dotenv/config';

import { Sites } from '@type/sites';

const getSiteInfo = (): Sites => {
  const appenv = (process.env.APP_ENV) ? process.env.APP_ENV : 'sandbox';
  const url = appenv === 'sandbox' ? 'https://www.tmsandbox.co.nz/' : null;

  return {
    url
  };
};

export const siteInfo: Sites = getSiteInfo();
