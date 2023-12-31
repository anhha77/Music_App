import React, { useState, createContext } from "react";
import Track1 from "../songs/track1.mp3";
import Track2 from "../songs/track2.mp3";
import Track3 from "../songs/track3.mp3";

const MusicPlayerContext = createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Track1",
      file: Track1,
    },
    {
      name: "Track2",
      file: Track2,
    },
    {
      name: "Track3",
      file: Track3,
    },
  ],
  currentTrackIndex: null,
  isPlaying: [false, false, false],
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
