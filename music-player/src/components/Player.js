import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Player = () => {
    return (
        <div className="player">
            <div className="song-control">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon
                    icon={faAngleLeft}
                    size="2x"
                    className="back-icon" />
                <FontAwesomeIcon
                    icon={faPlay}
                    size="2x"
                    className="play-icon" />
                <FontAwesomeIcon
                    icon={faAngleRight}
                    size="2x"
                    className="forward-icon" />
            </div>
        </div>
    )
}

export default Player; 