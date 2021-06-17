import React, { useState } from "react";
import Display from "./Display";
import Drumpads from "./Drumpads";
import "../css/App.css";

const audioClips = [
  {
    key: "q",
    text: "kick 1",
    path: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "w",
    text: "kick 2",
    path: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    key: "e",
    text: "kick 3",
    path: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "a",
    text: "snare 1",
    path: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    key: "s",
    text: "snare 2",
    path: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
  {
    key: "d",
    text: "snare 3",
    path: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
  {
    key: "z",
    text: "chord 1",
    path: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    key: "x",
    text: "chord 2",
    path: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    key: "c",
    text: "chord 3",
    path: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
];

const App = function () {
  const [audioText, setAudioText] = useState("");

  const changeAudioText = (text) => {
    setAudioText(text);
  };

  return (
    <div className="container drum-machine row" id="drum-machine">
      <Drumpads audioClips={audioClips} changeAudioText={changeAudioText} />
      <Display audioText={audioText} />
    </div>
  );
};

export default App;
