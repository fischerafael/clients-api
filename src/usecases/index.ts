import { ICreateClient, IDetailClient, IListClients } from "../entities/Client";
import { respository } from "../repositories";

export const createClient: ICreateClient = async (payload) => {
  const response = await respository.createClient(payload);
  return response;
};

export const listClients: IListClients = async (payload) => {
  const response = await respository.listClients(payload);
  return response;
};

export const detailClient: IDetailClient = async (payload) => {
  const response = await respository.detailClient(payload);
  return response;
};

export const useCase = {
  createClient,
  listClients,
  detailClient,
};
