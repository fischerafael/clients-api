import type { NextApiRequest, NextApiResponse } from "next";
import { useCase } from "../../../../src/usecases";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { query, method, body } = req;

    if (method === "PUT") {
      const response = await useCase.updatedClient({
        id: query.id as string,
        ...body,
      });
      return res.status(200).json({ response });
    }

    if (method === "DELETE") {
      await useCase.deleteClient({
        id: query.id as string,
      });
      return res.status(200).json({ message: "Ok" });
    }

    const response = await useCase.detailClient({
      id: query.id as string,
    });
    return res.status(200).json({ response });
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }
}
