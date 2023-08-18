import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json(get());
}

export function get():IOData {
  return [
    {
      title: 'Panopticom',
      tracks: [
        {title: 'Bright-Side Mix', src: 'Panopticom-Bright-Side-Mix.m4a'},
        {title: 'Dark-Side Mix', src: 'Panopticom-Dark-Side-Mix.m4a'},
        // {title: 'In-Side Mix', src: 'Panopticom-In-Side-Mix.m4a'},
      ],
    },
    {
      title: 'The Court',
      tracks: [
        {title: 'Bright-Side Mix', src: 'The-Court-Bright.m4a'},
        {title: 'Dark-Side Mix', src: 'The-Court-Dark.m4a'},
        // {title: 'In-Side Mix', src: 'The-Court-In.m4a'},
      ],
    },
    {
      title: 'Playing For Time',
      tracks: [
        {title: 'Bright-Side Mix', src: 'Playing-For-Time-Bright.m4a'},
        {title: 'Dark-Side Mix', src: 'Playing-For-Time-Dark.m4a'},
        {title: 'In-Side Mix', src: 'Playing-For-Time-In.m4a'},
      ],
    },
    {
      title: 'i/o',
      tracks: [
        {title: 'Bright-Side Mix', src: 'IO-Bright.m4a'},
        {title: 'Dark-Side Mix', src: 'IO-Dark.m4a'},
        {title: 'In-Side Mix', src: 'IO-In.m4a'},
      ],
    },
    {
      title: 'Four Kinds of Horses',
      tracks: [
        {title: 'Bright-Side Mix', src: 'Four-Kinds-of-Horses-Bright.m4a'},
        {title: 'Dark-Side Mix', src: 'Four-Kinds-of-Horses-Dark.m4a'},
        {title: 'In-Side Mix', src: 'Four-Kinds-of-Horses-In.m4a'},
      ],
    },
    {
      title: 'Road to Joy',
      tracks: [
        {title: 'Bright-Side Mix', src: 'Road-to-Joy-Bright.m4a'},
        {title: 'Dark-Side Mix', src: 'Road-to-Joy-Dark.m4a'},
        {title: 'In-Side Mix', src: 'Road-to-Joy-In.m4a'},
      ],
    },
    {
      title: 'So Much',
      tracks: [
        {title: 'Bright-Side Mix', src: 'So-Much-Bright.m4a'},
        {title: 'Dark-Side Mix', src: 'So-Much-Dark.m4a'},
        {title: 'In-Side Mix', src: 'So-Much-In.m4a'},
      ],
    },
    {
      title: 'Olive Tree',
      tracks: [
        {title: 'Bright-Side Mix', src: 'Olive-Tree-Bright.m4a'},
        {title: 'Dark-Side Mix', src: 'Olive-Tree-Dark.m4a'},
        {title: 'In-Side Mix', src: 'Olive-Tree-In.m4a'},
      ],
    },
  ];
}