'use client'

import { useState } from "react";
import Player from "./player";
import { Button, useTheme } from "@mui/material";

export default function Tracks({ioData}:{ioData:IOData}) {
  const theme = useTheme();
  const [currentSong, setCurrentSong] = useState<IOTrack>();
  return (
    <div className="justify-start w-full">
      <ol style={{ listStyle: "decimal" }} className="w-1/2 mb-8">
        {ioData.map((song) => {
          const current = song === currentSong;
          return (
            <li key={song.title}>
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