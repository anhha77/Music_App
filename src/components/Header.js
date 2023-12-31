import { Box } from "@mui/material";
import React from "react";

import useMusicPlayer from "../hooks/usePlayerProvider";

function Header() {
  const { currentTrackIndex, trackList } = useMusicPlayer();

  return (
    <Box
      sx={{
        height: "66px",
        bgcolor: "rgba(255, 255, 255, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: "70px",
        borderTopRightRadius: "70px",
      }}
    >
      <Box sx={{ width: "80%" }}>
        {currentTrackIndex !== null ? (
          <marquee
            style={{
              color: "#5e376d",
              fontWeigth: "400",
              letterSpacing: "2px",
            }}
          >
            {trackList[currentTrackIndex]["name"]}
          </marquee>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}

export default Header;
