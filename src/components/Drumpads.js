import React from "react";

const Drumpads = function (props) {
  const renderDrumPads = (audioClips) => {
    return audioClips.map((audio) => {
      return <div className="drum-pad">{audio.key.toUpperCase()}</div>;
    });
  };

  return (
    <div class="drum-pad-container col-md-7 my-5">
      {renderDrumPads(props.audioClips)}
    </div>
  );
};

export default Drumpads;
