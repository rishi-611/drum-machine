import React from "react";
import Display from "./Display";
import Drumpads from "./Drumpads";
import "../css/App.css";

const audioClips = [
  {
    key: "q",
    text: "kick 1",
    path: "../../source-files/audio/808-kick-fat-n-low.wav",
  },
  {
    key: "w",
    text: "kick 2",
    path: "../../source-files/audio/808-kick-fat-n-low.wav",
  },
  {
    key: "e",
    text: "kick 3",
    path: "../../source-files/audio/808-kick-fat-n-low.wav",
  },
  {
    key: "a",
    text: "snare 1",
    path: "../../source-files/audio/808-kick-fat-n-low.wav",
  },
  {
    key: "s",
    text: "snare 2",
    path: "../../source-files/audio/808-kick-fat-n-low.wav",
  },
  {
    key: "d",
    text: "snare 3",
    path: "../../source-files/audio/808-kick-fat-n-low.wav",
  },
  {
    key: "z",
    text: "claps 1",
    path: "../../source-files/audio/808-kick-fat-n-low.wav",
  },
  {
    key: "x",
    text: "claps 2",
    path: "../../source-files/audio/808-kick-fat-n-low.wav",
  },
  {
    key: "c",
    text: "claps 3",
    path: "../../source-files/audio/808-kick-fat-n-low.wav",
  },
];

const App = function () {
  return (
    <div class="container drum-machine row" id="drum-machine">
      <Drumpads audioClips={audioClips} />
      <Display />
    </div>
  );
};

export default App;
