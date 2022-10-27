import { NextApiRequest, NextApiResponse } from "next";
import CommunityData from "../../content/community.json";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const community = CommunityData;

    res.status(200).json(community);
}


