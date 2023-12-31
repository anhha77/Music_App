import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import HeadphonesIcon from "@mui/icons-material/Headphones";

const style = {
  marginTop: "8px",
  marginBottom: "8px",
  padding: "8px",
  bgcolor: "hsla(0, 0%, 100%, 0.5)",
  border: "none",
  borderRadius: "10px",
  width: "70%",
  display: "flex",
  justifyContent: "space-between",
  "&:hover": {
    backgroundColor: "hsla(0, 0%, 100%, 0.2)",
  },
};

function TrackList() {
  const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {trackList.map((track, index) => (
        <Button
          variant="contained"
          key={index}
          sx={style}
          onClick={() => playTrack(index)}
        >
          <div
            className="contain-icon"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "25px",
              height: "25px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "50%",
            }}
          >
            {isPlaying[index] ? (
              <HeadphonesIcon sx={{ height: "15px", width: "15px" }} />
            ) : (
              <PauseIcon
                sx={{
                  height: "15px",
                  width: "15px",
                }}
              />
            )}
          </div>
          <Typography
            variant="p"
            sx={{
              marginLeft: "16px",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              lineHeight: "1.5",
              letterSpacing: "0.00938em",
              color: "rgb(94, 55, 109)",
              fontSize: "12px",
              fontWeight: "300",
            }}
          >
            {track.name}
          </Typography>
        </Button>
      ))}
    </Box>
  );
}

export default TrackList;
