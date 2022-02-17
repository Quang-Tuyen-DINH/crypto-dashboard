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
      <div className="input scenario">
        <Senario />
      </div>
      <div className='input buy'>
        <Buy />
      </div>
      <div className='input sell'>
        <Sell />
      </div>
      <div className='input fundings'>
        <Fundings />
      </div>
      <div className='input results'>
        <Results />
      </div>
    </div>
  )
}

export default Inputs;