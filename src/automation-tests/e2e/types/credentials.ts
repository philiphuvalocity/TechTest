export interface Credentials {
  USERNAME: string;
  PASSWORD: string;
}

export interface ConfigRoles {
  [x: string]: Credentials;
}
