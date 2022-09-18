import type { NextApiRequest, NextApiResponse } from "next";
import { useCase } from "../../src/usecases";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { method, body } = req;
    if (method === "POST") {
      const response = await useCase.createClient(body);
      return res.status(201).json({ response });
    }

    return res.status(200).json({ name: "ISSO É UM GET" });
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }
}
