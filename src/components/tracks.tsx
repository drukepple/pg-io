'use client'

import { useState } from "react";
import Player from "./player";
import { Button, useTheme } from "@mui/material";

export default function Tracks({ioData}:{ioData:IOData}) {
  const theme = useTheme();
  const [currentSong, setCurrentSong] = useState<IOTrack>();
  return (
    <div className="justify-start w-full">
      <ol style={{ listStyle: "decimal", paddingLeft: '1.5em' }} className={`mb-8 md:columns-2`}>
        {ioData.map((song) => {
          const current = song === currentSong;
          return (
            <li key={song.title} className="w-5/6 mb-2">
              <Button
                variant="contained"
                disableElevation
                disabled={current}
                color={current ? "info" : "primary"}
                sx={{
                  "&.Mui-disabled": {
                    color: theme.palette.primary.contrastText,
                    backgroundColor: theme.palette.primary.light,
                  },
                }}
                className="justify-start"
                fullWidth
                onClick={() => setCurrentSong(song)}
              >
                {song.title}
              </Button>
            </li>
          );
        })}
      </ol>
      <Player song={currentSong} />
    </div>
  );

}