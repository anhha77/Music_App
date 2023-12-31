import { useContext } from "react";
import { MusicPlayerContext } from "../contexts/MusicPlayerContext";

const useMusicPlayer = () => {
  const { state, setState } = useContext(MusicPlayerContext);

  function playTrack(index) {
    if (index === state.currentTrackIndex) {
      togglePlay(index);
    } else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(state.tracks[index].file);
      state.audioPlayer.play();
      const newIsPlayingList = state["isPlaying"].map((item, i) => {
        if (i === index) {
          return true;
        }
        return false;
      });
      setState({
        ...state,
        currentTrackIndex: index,
        isPlaying: newIsPlayingList,
      });
    }
  }

  function togglePlay(index) {
    if (state.isPlaying[index]) {
      state.audioPlayer.pause();
    } else {
      state.audioPlayer.play();
    }
    const newIsPlayingList = state["isPlaying"].map((item, i) => {
      if (i === index) {
        return !item;
      }
      return item;
    });
    setState({ ...state, isPlaying: newIsPlayingList });
  }

  function playPreviousTrack() {
    const newIndex =
      (((state.currentTrackIndex + -1) % state.tracks.length) +
        state.tracks.length) %
      state.tracks.length;
    playTrack(newIndex);
  }

  function playNextTrack() {
    const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
    playTrack(newIndex);
  }

  return {
    playTrack,
    togglePlay,
    currentTrackName:
      state.currentTrackIndex !== null &&
      state.tracks[state.currentTrackIndex].name,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    currentTrackIndex: state.currentTrackIndex,
    playPreviousTrack,
    playNextTrack,
  };
};

export default useMusicPlayer;
