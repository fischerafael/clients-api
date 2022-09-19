import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";
import {
  IClient,
  ICreateClient,
  IDetailClient,
  IListClients,
} from "../entities/Client";

export const createClient: ICreateClient = async (payload) => {
  const clientCollection = collection(db, "clients");
  const client = await addDoc(clientCollection, payload);
  return { id: client.id };
};

export const listClients: IListClients = async (payload) => {
  const q = query(collection(db, "clients"), where("user", "==", payload.user));
  const querySnapshot = await getDocs(q);
  const clientsList: IClient[] = [];
  querySnapshot.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();
    clientsList.push({ id: id, ...data } as IClient);
  });
  return clientsList;
};

export const detailClient: IDetailClient = async (payload) => {
  const response = await getDoc(doc(db, "clients", payload.id));
  const data = { id: response.id, ...response.data() };
  return data as IClient;
};

export const respository = { createClient, listClients, detailClient };
