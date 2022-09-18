import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { ICreateClient } from "../entities/Client";

export const createClient: ICreateClient = async (payload) => {
  const clientCollection = collection(db, "clients");
  const client = await addDoc(clientCollection, payload);
  return { id: client.id };
};

export const respository = { createClient };
