import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Player = ({ songs, isPlaying, setIsPlaying, currentSong, setCurrentSong }) => {
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
        setSongInfo({
            ...songInfo,
            currentTime: e.target.currentTime,
            duration: e.target.duration
        });
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
    const skipTrackHandler = (direction) => {
        const currentIndex = songs.findIndex(song => song.id === currentSong.id);
        const mod = (n, m) => ((n % m) + m) % m; // workaround for JS' modulo operator using negative numbers
        setCurrentSong(
            direction === "forward"
                ? songs[mod(currentIndex + 1, songs.length)]
                : songs[mod(currentIndex - 1, songs.length)]
        )
    }
    // Whenever the current song changes and the status is playing, automatically play the new song
    // useEffect(() => {
    //     if (isPlaying && audioRef.current.paused) {
    //         audioRef.current.play()
    //     }
    // }, [isPlaying, currentSong])

    const autoPlayHandler = () => {
        if (isPlaying) {
            audioRef.current.play();
        }
    }
    const trackAnimation = {
        transform: `translateX(${(songInfo.currentTime / songInfo.duration) * 100}%)`
    }

    return (
        <div className="player">
            <div className="song-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div
                    className="track"
                    style={{ background: `linear-gradient(to right,${currentSong.color[0]}, ${currentSong.color[1]})` }}
                >
                    <input
                        min={0}
                        max={songInfo.duration || 0}
                        value={songInfo.currentTime}
                        type="range"
                        onChange={dragHandler}
                    />
                    <div className="animate-track" style={trackAnimation}></div>
                </div>
                <p>{getTime(songInfo.duration || 0)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon
                    icon={faAngleLeft}
                    size="2x"
                    className="back-icon"
                    onClick={() => skipTrackHandler("back")}
                />
                <FontAwesomeIcon
                    icon={isPlaying ? faPause : faPlay}
                    size="2x"
                    className="play-icon"
                    onClick={playSongHandler} />
                <FontAwesomeIcon
                    icon={faAngleRight}
                    size="2x"
                    className="forward-icon"
                    onClick={() => skipTrackHandler("forward")}
                />
            </div>
            <audio
                ref={audioRef}
                src={currentSong.audio}
                onTimeUpdate={updateTimeHandler}
                onLoadedMetadata={updateTimeHandler}
                onCanPlay={autoPlayHandler}
            ></audio>
        </div>
    );
}

export default Player; 