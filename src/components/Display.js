import React from "react";

const Display = function (props) {
  return (
    <div className="col-md-5 display-container center-align">
      <div id="display" className="container center-align my-2 mb-5">
        <h3>{props.audioText}</h3>
      </div>
    </div>
  );
};

export default Display;
