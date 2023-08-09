import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  results: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // TODO: 👽 implement API search
  const results = req.query.q;
  console.log("🔍: ", results);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
}
