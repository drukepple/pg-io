import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      title: 'Panopticom',
      tracks: [
        'Panopticom-Bright-Side-Mix.m4a',
        'Panopticom-Dark-Side-Mix.m4a',
      ],
    },
    {
      title: 'um'
    }
  ]);
}