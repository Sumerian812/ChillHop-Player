import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Player = ({ isPlaying, setIsPlaying, currentSong }) => {
    // state
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    })
    // ref
    const audioRef = useRef(null)
    // event handlers
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }
    const updateTimeHandler = (e) => {
        setSongInfo({ ...songInfo, currentTime: e.target.currentTime, duration: e.target.duration });
    }
    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value })
    }
    // Whenever the current song changes and the status is playing, automatically play the new song
    useEffect(() => {
        if (isPlaying && audioRef.current.paused) {
            audioRef.current.play()
        }
    }, [isPlaying, currentSong])

    return (
        <div className="player">
            <div className="song-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input
                    min={0}
                    max={songInfo.duration}
                    value={songInfo.currentTime}
                    type="range"
                    onChange={dragHandler}
                />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon
                    icon={faAngleLeft}
                    size="2x"
                    className="back-icon" />
                <FontAwesomeIcon
                    icon={isPlaying ? faPause : faPlay}
                    size="2x"
                    className="play-icon"
                    onClick={playSongHandler} />
                <FontAwesomeIcon
                    icon={faAngleRight}
                    size="2x"
                    className="forward-icon" />
            </div>
            <audio
                ref={audioRef}
                src={currentSong.audio}
                onTimeUpdate={updateTimeHandler}
                onLoadedMetadata={updateTimeHandler}
            ></audio>
        </div>
    )
}

export default Player; 