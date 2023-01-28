import React, { useState } from "react";

const MusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const songs = [{ title: "holy City" }];

  const handlePlay = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const handleStop = () => {
    setCurrentSong(null);
    setIsPlaying(false);
  };
  // music-metadataorget-music-metadata` to fetch the metadata of the songs in a more efficient wa

  return (
    <div>
      {currentSong ? (
        <>
          <h2>Now Playing: {currentSong.title}</h2>
          <button onClick={handleStop}>Stop</button>
        </>
      ) : (
        <>
          <h2>Select a Song to Play</h2>
          {songs.map((song) => (
            <button onClick={() => handlePlay(song)}>{song.title}</button>
          ))}
        </>
      )}
    </div>
  );
};

export default MusicPlayer;
