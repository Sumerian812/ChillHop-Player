import React from "react";
import recordPlayerArm from "./arm.png";

const Song = ({ currentSong, songInfo, libraryStatus }) => {
    const coverAnimation = {
        transform: `rotate(${(songInfo.currentTime * 15)}deg)`,
        transition: `all 300ms linear`
    }

    return (
        <div className="song-container">
            <img src={recordPlayerArm}
                alt="record player arm"
                className={`${libraryStatus ? 'library-active' : 'record-player-arm'}`}
            />
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