import { v4 as uuidv4 } from "uuid";
// images
import beaverCreekImg from "./assets/images/beaverCreek.jpg";
import daylightAiguille from "./assets/images/daylightAiguille.jpg";
import reflectionSworn from "./assets/images/reflectionSworn.jpg";
import mirage from "./assets/images/mirage.jpg";
import insideMiscel from "./assets/images/insideMiscel.jpg";
//audio
import beaverCreekAudio from "./assets/audio/BeaverCreek.mp3"; 
import dayAndNightAudio from "./assets/audio/DayAndNight.mp3";
import keepGoingAudio from "./assets/audio/KeepGoing.mp3";
import nightfallAudio from "./assets/audio/Nightfall.mp3";
import reflectionAudio from "./assets/audio/Reflection.mp3";
import underCityStarsAudio from "./assets/audio/UnderTheCityStars.mp3";
import sleepoverAudio from "./assets/audio/Sleepover.mp3";
import insideAudio from "./assets/audio/Inside.mp3";

function chillHop() {
    return [
        {
            name: "Keep Going",
            cover: reflectionSworn,
            artist: "Swørn",
            audio: keepGoingAudio,
            color: ["#CD607D", "#c94043"],
            id: uuidv4()
        },
        {
            name: "Beaver Creek",
            cover: beaverCreekImg,
            artist: "Aso, Middle School, Aviino",
            audio: beaverCreekAudio,
            color: ["#205950", "#2ab3bf"],
            id: uuidv4()
        },
        {
            name: "Day and Night",
            cover: daylightAiguille,
            artist: "Aiguille",
            audio: dayAndNightAudio,
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4()
        },
        {
            name: "Reflection",
            cover: reflectionSworn,
            artist: "Swørn",
            audio: reflectionAudio,
            color: ["#CD607D", "#c94043"],
            id: uuidv4()
        },
        {
            name: "Under the City Stars",
            cover: beaverCreekImg,
            artist: "Aso, Middle School, Aviino",
            audio: underCityStarsAudio,
            color: ["#205950", "#2ab3bf"],
            id: uuidv4()
        },
        {
            name: "Nightfall",
            cover: daylightAiguille,
            artist: "Aiguille",
            audio: nightfallAudio,
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4()
        },
        {
            name: "Sleepover",
            cover: mirage,
            artist: "Nymano, JK the Sage",
            audio: sleepoverAudio,
            color: ["#83668B", "#5A5281"],
            id: uuidv4()
        },
        {
            name: "Inside",
            artist: "Miscél",
            cover: insideMiscel,
            audio: insideAudio,
            color: ["#B95F64", "#CA90AA"],
            id: uuidv4()
        }
    ];
}

export default chillHop;
