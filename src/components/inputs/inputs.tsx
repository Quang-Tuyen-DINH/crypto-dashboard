import React from 'react';
import Senario from "./scenario";
import Buy from "./buy";
import Sell from "./sell";
import Fundings from "./fundings";
import Results from "./results";
import "./inputs.scss";

function Inputs() {
  return (
    <div className="container">
      <div className="scenario">
        <Senario />
      </div>
      <div className='buy'>
        <Buy />
      </div>
      <div className='sell'>
        <Sell />
      </div>
      <div className='fundings'>
        <Fundings />
      </div>
      <div className='results'>
        <Results />
      </div>
    </div>
  )
}

export default Inputs;