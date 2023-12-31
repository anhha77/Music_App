import React from "react";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import Header from "./components/Header";
import TrackList from "./components/TrackList";
import Controller from "./components/Controller";
import "./App.css";

function App() {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <Header />
        <TrackList />
        <Controller />
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
