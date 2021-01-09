import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ libraryStatus, songs, currentSong, setCurrentSong }) => {
    return (
        <div className={`library ${libraryStatus ? "active-library" : ""}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => (
                    <LibrarySong
                        song={song}
                        key={song.id}
                        currentSong={currentSong}
                        setCurrentSong={setCurrentSong}
                    />
                ))}
            </div>
        </div>
    )
}

export default Library;