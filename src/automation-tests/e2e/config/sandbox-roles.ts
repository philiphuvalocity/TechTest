import 'dotenv/config';

import { ConfigRoles } from '@type/credentials';

/**
* Set up the password to process from .env file.
*
* @remarks N/A
* @param N/A
* @returns N/A
*
*/
const password = process.env.SandboxPassword;

/**
* export the roles with UserName and Password for login purpose.
*
* @remarks N/A
* @param N/A
* @returns N/A
*
*/
export const roles: ConfigRoles = {
  TESTUSER: {
    USERNAME: 'Auto.Val@valtest.co.nz',
    PASSWORD: password
  }
};
