import {
  ICreateClient,
  IDeleteClient,
  IDetailClient,
  IListClients,
  IUpdateClient,
} from "../entities/Client";
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

export const updatedClient: IUpdateClient = async (payload) => {
  const response = await respository.updatedClient(payload);
  return response;
};

export const deleteClient: IDeleteClient = async (payload) => {
  const response = await respository.deleteClient(payload);
  return response;
};

export const useCase = {
  createClient,
  listClients,
  detailClient,
  updatedClient,
  deleteClient,
};
