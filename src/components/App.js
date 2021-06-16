import React from "react";
import Display from "./Display";
import Drumpads from "./Drumpads";
import "../css/App.css";

const App = function () {
  return (
    <div class="drum-machine" id="drum-machine">
      <Drumpads />
      <Display />
    </div>
  );
};

export default App;
