import { v4 as uuidv4 } from "uuid";
import beaverCreekImg from "./assets/beaverCreek.jpg";
import daylightAiguille from "./assets/daylightAiguille.jpg";
import reflectionSworn from "./assets/reflectionSworn.jpg";
import mirage from "./assets/mirage.jpg";
import insideMiscel from "./assets/insideMiscel.jpg";

function chillHop() {
    return [
        {
            name: "Beaver Creek",
            cover: beaverCreekImg,
            artist: "Aso, Middle School, Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4()
        },
        {
            name: "Daylight",
            cover: daylightAiguille,
            artist: "Aiguille",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4()
        },
        {
            name: "Keep Going",
            cover: reflectionSworn,
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
            color: ["#CD607D", "#c94043"],
            id: uuidv4()
        },
        {
            name: "Nightfall",
            cover: daylightAiguille,
            artist: "Aiguille",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
            color: ["#EF8EA9", "#ab417f"],
            id: uuidv4()
        },
        {
            name: "Reflection",
            cover: reflectionSworn,
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
            color: ["#CD607D", "#c94043"],
            id: uuidv4()
        },
        {
            name: "Under the City Stars",
            cover: beaverCreekImg,
            artist: "Aso, Middle School, Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4()
        },
        {
            name: "Sleepover",
            cover: mirage,
            artist: "Nymano, JK the Sage",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10130",
            color: ["#83668B", "#5A5281"],
            id: uuidv4()
        },
        {
            name: "Inside",
            artist: "Miscél",
            cover: insideMiscel,
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9322",
            color: ["#B95F64", "#CA90AA"],
            id: uuidv4()
        }
    ];
}

export default chillHop;
