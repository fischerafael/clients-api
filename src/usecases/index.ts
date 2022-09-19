import {
  ICreateClient,
  IDeleteClient,
  IDetailClient,
  IListClients,
  IUpdateClient,
} from "../entities/Client";
import { respository } from "../repositories";

export const createClient: ICreateClient = async (payload) => {
  const exists = await respository.detailClientByEmail({
    email: payload.email,
  });

  if (exists) {
    throw new Error("Client with this email already exists");
  }
  const response = await respository.createClient(payload);
  return response;
};

export const listClients: IListClients = async (payload) => {
  const response = await respository.listClients(payload);
  return response;
};

export const detailClient: IDetailClient = async (payload) => {
  const exists = await respository.detailClient({
    id: payload.id,
  });
  if (!exists.email) {
    throw new Error("Client does not exist");
  }
  const response = await respository.detailClient(payload);
  return response;
};

export const updatedClient: IUpdateClient = async (payload) => {
  const exists = await respository.detailClientByEmail({
    email: payload.email,
  });

  if (exists) {
    throw new Error("Client with this email already exists");
  }
  const response = await respository.updatedClient(payload);
  return response;
};

export const deleteClient: IDeleteClient = async (payload) => {
  const exists = await respository.detailClient({
    id: payload.id,
  });
  if (!exists.email) {
    throw new Error("Client does not exist");
  }
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
