import { NextApiRequest, NextApiResponse } from "next";
import EventData from "../../content/events.json";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const event = EventData;

    res.status(200).json(event);
}


