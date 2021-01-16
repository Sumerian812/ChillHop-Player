import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import recordPlayerArm from "../assets/arm1.png";
import needleAudio from "../assets/NeedleDrop.mp3";
import clickSound from "../assets/click.mp3";

const Player = ({ songInfo, setSongInfo, songs, isPlaying, setIsPlaying, currentSong,
    setCurrentSong, libraryStatus }) => {
    // state
    const [armLifted, setArmLifted] = useState(true)
    // ref
    const audioRef = useRef(null)
    const needleRef = useRef(null)
    const clickRef = useRef(null)
    // event handlers
    const playSongHandler = (e) => {
        if (e.target.id === "playerArm") {
            clickRef.current.play();
            clickRef.current.volume = 0.3;
        }
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            setTimeout(() => {
                needleRef.current.play();
                audioRef.current.play();
            }, 500)

        }
        setArmLifted(!armLifted);
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
    const autoPlayHandler = () => {
        if (isPlaying) {
            audioRef.current.play();
        }
    }
    const trackAnimation = {
        transform: `translateX(${(songInfo.currentTime / songInfo.duration) * 100}%)`
    }
    const armAnimation = armLifted
        ? { transform: `rotate(-55deg)`, transformOrigin: `65% 20%` }
        : { transform: `rotate(0deg)`, transformOrigin: `65% 20%` };

    return (
        <div className="player">
            <img src={recordPlayerArm}
                id="playerArm"
                alt="record player arm"
                className={`${libraryStatus ? 'record-player-arm-active-lib' : 'record-player-arm'}`}
                onClick={playSongHandler}
                style={armAnimation}
            />
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
                ref={needleRef}
                src={needleAudio}
            ></audio>
            <audio
                ref={clickRef}
                src={clickSound}
            ></audio>
            <audio
                ref={audioRef}
                src={currentSong.audio}
                onTimeUpdate={updateTimeHandler}
                onLoadedMetadata={updateTimeHandler}
                onCanPlay={autoPlayHandler}
                onEnded={() => skipTrackHandler("forward")}
            ></audio>
        </div>
    );
}

export default Player; 