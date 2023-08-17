import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req:NextApiRequest, res:NextApiResponse) {
  console.log('................')
  res.status(200).json([
    {
      title: "Panopticom",
      tracks: [
        "Panopticom-Bright-Side-Mix.m4a",
        "Panopticom-Dark-Side-Mix.m4a",
      ]
    }
  ])
}