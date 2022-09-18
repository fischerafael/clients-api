export interface IClient {
  id?: string;
  name: string;
  address: string;
  city: string;
  country: string;
  email: string;
  phone: string;
}

export interface ICreateClient {
  (payload: IClient): Promise<{ id: string }>;
}
