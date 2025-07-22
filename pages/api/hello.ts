// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = CarType[];

type CarType = {
  id: number;
  model: string;
};

const carsDB: CarType[] = [
  {
    id: 1,
    model: "BMW",
  },
  {
    id: 2,
    model: "AUDI",
  },
  {
    id: 3,
    model: "Lexus",
  },
  {
    id: 4,
    model: "Kia",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data> | any
) {
  let cars = carsDB;

  if (req.method === "GET") {
    const term = req.query.term as string;
    if (term) {
      cars = cars.filter((c) =>
        c.model.toLowerCase().includes(term.toLowerCase())
      );
    }
    res.status(200).json(cars);
  } else if (req.method === "POST") {
    // Обработка POST-запроса (добавление новой машины)
    const { model } = req.body;

    if (!model || typeof model !== "string") {
      return res.status(400).json({ message: "Invalid model!" });
    }

    const newCar: CarType = {
      id: 22,
      model: model.trim(),
    };

    carsDB.push(newCar);
    res.status(201).json(newCar);
  } else {
    // Метод не поддерживается
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
