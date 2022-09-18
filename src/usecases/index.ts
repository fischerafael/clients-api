import { ICreateClient } from "../entities/Client";
import { respository } from "../repositories";

export const createClient: ICreateClient = async (payload) => {
  const response = await respository.createClient(payload);
  return response;
};

export const useCase = {
  createClient,
};
