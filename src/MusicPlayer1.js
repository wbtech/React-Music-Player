import React, { useState } from "react";

const Appp = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [songs, setSongs] = useState([
    {
      title: "song1",
      artist: "artist1",
      album: "album1",
      cover: "cover1.jpg",
      url: "song1.mp3",
    },
    {
      title: "song2",
      artist: "artist2",
      album: "album2",
      cover: "cover2.jpg",
      url: "song2.mp3",
    },
    {
      title: "song3",
      artist: "artist3",
      album: "album3",
      cover: "cover3.jpg",
      url: "song3.mp3",
    },
  ]);

  const handlePlay = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    audioRef.current.play();
    setInterval(() => {
      setCurrentTime(audioRef.current.currentTime);
    }, 1000);
  };

  const handlePause = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const handleStop = () => {
    setCurrentSong(null);

    setIsPlaying(false);

    setCurrentTime(0);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  const handleNext = () => {
    // code to play the nextsong
  };

  const handlePrev = () => {
    // code to play the prevsong
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value;
  };

  const audioRef = React.createRef();

  return (
    <div style={styles.box}>
      {currentSong ? (
        <>
          <h2>Now Playing: {currentSong.title}</h2>
          <audio ref={audioRef} src={currentSong.url} />

          <div>
            <div
              style={{
                width: ` ${(currentTime / currentSong.duration) * 100}% `,
              }}></div>
          </div>

          <div>
            <label>Volume: {volume}</label>
            <input
              type='range'
              min={0}
              max={1}
              step={0.1}
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>

          <div>
            <img src={currentSong.cover} alt={`${currentSong.title} cover`} />
            <p>Artist: {currentSong.artist}</p>
            <p>Album: {currentSong.album}</p>
          </div>
          <button onClick={handleStop}>Stop</button>

          {isPlaying ? (
            <button onClick={handlePause}>Pause</button>
          ) : (
            <button onClick={handlePlay}>Play</button>
          )}
          <button onClick={handleNext}>Next</button>
          <button onClick={handlePrev}>Prev</button>
          <h2>Songs</h2>
          <ul>
            {songs.map((song) => (
              <li key={song.title} onClick={() => handlePlay(song)}>
                {song.title}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h2>Select a Song to Play</h2>
          <ul>
            {songs.map((song) => (
              <li key={song.title} onClick={() => handlePlay(song)}>
                {song.title}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Appp;

const styles = {
  box: {
    backgroundColor: "orange",
  },
};
