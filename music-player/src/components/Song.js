import React from "react";

const Song = ({ currentSong, songInfo }) => {
    const coverAnimation = {
        transform: `rotate(${(songInfo.currentTime * 15)}deg)`,
        transition: `transform 300ms linear`
    }

    return (
        <div className="song-container">
            <img src={currentSong.cover}
                alt={`${currentSong.name} album cover`}
                style={coverAnimation}
                className="album-cover"
            />
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}

export default Song; 