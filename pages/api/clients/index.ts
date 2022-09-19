import type { NextApiRequest, NextApiResponse } from "next";
import { useCase } from "../../../src/usecases";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { method, body, query } = req;
    if (method === "POST") {
      const response = await useCase.createClient(body);
      return res.status(201).json({ response });
    }

    const response = await useCase.listClients({
      user: query.user as string,
    });
    return res.status(200).json({ response });
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }
}
