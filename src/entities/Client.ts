export interface IClient {
  id?: string;
  name: string;
  address: string;
  city: string;
  country: string;
  email: string;
  phone: string;
  user: string;
}

export interface ICreateClient {
  (payload: IClient): Promise<{ id: string }>;
}

export interface IListClients {
  ({ user }: { user: string }): Promise<IClient[]>;
}

export interface IDetailClient {
  ({ id }: { id: string }): Promise<IClient>;
}

export interface IDetailClientByEmail {
  ({ email }: { email: string }): Promise<IClient>;
}

export interface IUpdateClient {
  (payload: IClient): Promise<IClient>;
}

export interface IDeleteClient {
  ({ id }: { id: string }): Promise<void>;
}
