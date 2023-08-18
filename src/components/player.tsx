import { useEffect, useState } from "react";
import {Howl} from 'howler';
import { Button, IconButton, LinearProgress, useTheme } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

let howls: Howl[] = [];
let playbackInterval: ReturnType<typeof setTimeout>;

function formatTime(seconds?:number) {
  if (!seconds) { return '0:00'; }
  const mins = Math.floor(seconds / 60);
  const secs = Math.round(seconds - (mins * 60));
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

export default function Player({song}:{song?:IOTrack}) {
  const theme = useTheme();
  const [currentTrack, setCurrentTrack] = useState(0);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (!song) {return;}
    setReady(false);
    console.log('song updated', song);
    howls.forEach(h => h.unload());
    howls = [];
    setCurrentTime(0);
    setPlaying(false);
    clearTimer();
    song.tracks.forEach((t, i) => howls.push(new Howl({
      src: t.src,
      volume: i === 0 ? 1 : 0,
      onload: () => {
        if (howls.every(h => h.state() === 'loaded')) {
          console.log('All sounds loaded');
          setReady(true);
        }
      }
    })))
    chooseTrack(0);
    console.log('howls', howls[0].volume(), howls[1].volume());
  }, [song])

  const play = () => {
    setPlaying(true);
    howls.forEach(h => h.play());
    clearTimer();
    startTimer();
  }
  const startTimer = () => {
    const checkTime = () => {
      const curSeek = Math.round(howls[0].seek());
      if (currentTime !== curSeek) {
        setCurrentTime(curSeek);
      }

    }
    checkTime();
    playbackInterval = setInterval(checkTime, 100);
  }
  const clearTimer = () => {
    clearInterval(playbackInterval);
  }
  const pause = () => {
    setPlaying(false);
    howls.forEach(h => h.pause());
  }
  const chooseTrack = (index:number) => {
    setCurrentTrack(index);
    howls.forEach((h, i) => {
      h.volume(i === index ? 1 : 0);
    });
  }

  const timelineClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    clearTimer();
    if (!e.target) { return; }
    const closest = (e.target as HTMLElement).closest(".MuiLinearProgress-root ");
    if (!closest) { return; }
    const rect = closest.getBoundingClientRect();
    const w = rect.width;
    const x = e.clientX - rect.left;
    const dur = howls[0].duration();
    const seek = (x / w) * dur;
    setCurrentTime(seek);
    howls.forEach(h => h.seek(seek))
    startTimer()
  };

  const getCurrentPosition = () => {
    // console.log('getting current position', howls[0]?.seek(), currentTime);
    return howls[0] ? (currentTime / howls[0].duration()) * 100 : 0
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {song && (
        <>
          <h2 className="text-2xl mb-4">Playing “{song.title}”</h2>
          <div className="flex flex-col">
            <div className="flex mb-4 flex-col sm:flex-row">
              {song.tracks.map((t, i) => {
                const current = i === currentTrack;
                return (
                  <Button
                    className="mr-2"
                    variant="contained"
                    color="secondary"
                    key={t.src}
                    onClick={() => chooseTrack(i)}
                    disabled={current}
                    sx={{
                      "&.Mui-disabled": {
                        color: theme.palette.secondary.contrastText,
                        backgroundColor: theme.palette.secondary.light,
                      },
                    }}
                  >
                    {t.title}
                  </Button>
                );
              })}
            </div>
            <div className="flex items-center">
              <IconButton
                onClick={() => (playing ? pause() : play())}
                disabled={!ready}
              >
                {playing ? (
                  <PauseCircleIcon htmlColor="white" />
                ) : (
                  <PlayCircleIcon htmlColor="white" />
                )}
              </IconButton>
              <span className="mr-2">{formatTime(currentTime)}</span>
              <LinearProgress
                onClick={timelineClick}
                variant="determinate"
                color="secondary"
                value={getCurrentPosition()}
                className="w-full"
                sx={{
                  "& .MuiLinearProgress-bar": {
                    transition: "none",
                  },
                }}
              />
              <span className="ml-2">{formatTime(howls[0]?.duration())}</span>
            </div>
          </div>
        </>
      )}
      {/* <pre>
        {JSON.stringify(
          {
            index: currentTrack,
            title: song?.tracks[currentTrack],
            howls: howls.map((h) => h.volume()),
          },
          null,
          4
        )}
      </pre> */}
    </div>
  );
}