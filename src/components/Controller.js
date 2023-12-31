import { Box, Button } from "@mui/material";
import React from "react";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import useMusicPlayer from "../hooks/usePlayerProvider";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";

function Controller() {
  const {
    currentTrackIndex,
    playPreviousTrack,
    playNextTrack,
    togglePlay,
    isPlaying,
  } = useMusicPlayer();
  if (currentTrackIndex === null) {
    return (
      <Box
        sx={{
          height: "66px",
          bgcolor: "rgba(255, 255, 255, 0.5)",
          borderBottomLeftRadius: "70px",
          borderBottomRightRadius: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Button sx={{ padding: "6px 8px" }} disabled={false}>
            <SkipPreviousIcon
              sx={{
                width: "35px",
                height: "35px",
                color: "rgba(0, 0, 0 ,0.5)",
              }}
            />
          </Button>
          <Button sx={{ padding: "12px" }} disabled={false}>
            <PlayCircleIcon
              sx={{
                width: "50px",
                height: "50px",
                color: "rgba(0, 0, 0 ,0.5)",
              }}
            />
          </Button>
          <Button sx={{ padding: "6px 8px" }} disabled={false}>
            <SkipNextIcon
              sx={{
                width: "35px",
                height: "35px",
                color: "rgba(0, 0, 0 ,0.5)",
              }}
            />
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: "66px",
        bgcolor: "rgba(255, 255, 255, 0.5)",
        borderBottomLeftRadius: "70px",
        borderBottomRightRadius: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Button sx={{ padding: "6px 8px" }} onClick={playPreviousTrack}>
          <SkipPreviousIcon
            sx={{
              width: "35px",
              height: "35px",
              color: "rgba(0, 0, 0 ,0.5)",
            }}
          />
        </Button>
        <Button
          sx={{ padding: "12px" }}
          onClick={() => togglePlay(currentTrackIndex)}
        >
          {isPlaying.includes(true) ? (
            <PauseCircleFilledIcon
              sx={{
                width: "50px",
                height: "50px",
                color: "rgba(0, 0, 0 ,0.5)",
              }}
            />
          ) : (
            <PlayCircleIcon
              sx={{
                width: "50px",
                height: "50px",
                color: "rgba(0, 0, 0 ,0.5)",
              }}
            />
          )}
        </Button>
        <Button sx={{ padding: "6px 8px" }} onClick={playNextTrack}>
          <SkipNextIcon
            sx={{
              width: "35px",
              height: "35px",
              color: "rgba(0, 0, 0 ,0.5)",
            }}
          />
        </Button>
      </Box>
    </Box>
  );
}

export default Controller;
