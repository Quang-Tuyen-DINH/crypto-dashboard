import React from 'react';
import Senario from "./scenario";
import Buy from "./buy";
import Sell from "./sell";
import Fundings from "./fundings";
import Results from "./results";


function Inputs() {
  return (
    <div>
      <Senario />
      <Buy />
      <Sell />
      <Fundings />
      <Results />
    </div>
  )
}

export default Inputs;