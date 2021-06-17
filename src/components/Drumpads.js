import React, { useEffect } from "react";

const Drumpads = function ({ audioClips, changeAudioText }) {
  useEffect(() => {
    // play audio on key press
    document.addEventListener("keydown", function (e) {
      const player = document.querySelector(`#${e.key}`);

      if (!player) {
        return;
      }
      player.play();

      // extract the audio text for corresponding key, from props
      const [requiredAudio] = audioClips.filter((audio) => audio.key === e.key);

      changeAudioText(requiredAudio.text);
    });
  }, []);

  const playAudio = (audio) => {
    document.querySelector(`#${audio.key}`).play();
    changeAudioText(audio.text);
  };

  const renderDrumPads = (audioClips) => {
    return audioClips.map((audio) => {
      return (
        <div
          className="drum-pad center-align"
          key={audio.key}
          onClick={() => playAudio(audio)}
        >
          {audio.key.toUpperCase()}
          <audio id={`${audio.key}`}>
            <source src={audio.path} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      );
    });
  };

  return (
    <div className="drum-pad-container col-md-7 my-5">
      {renderDrumPads(audioClips)}
    </div>
  );
};

export default Drumpads;
