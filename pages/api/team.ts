import { NextApiRequest, NextApiResponse } from "next";
import TeamData from "../../content/team.json";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const community = TeamData;

    res.status(200).json(community);
}


