import React from 'react';
import './App.scss';
import Inputs from "./inputs/inputs";
import AccordionView from './accordion-view/accordion-view';
import Scenario from './inputs/scenario';
import Buy from './inputs/buy';
import Sell from './inputs/sell';
import Fundings from './inputs/fundings';
import Results from './inputs/results';

function App() {
  const inputList: any[] = [
    {
      title: 'scenario',
      component: <Scenario />
    },
    {
      title: 'buy',
      component: <Buy />
    },
    {
      title: 'sell',
      component: <Sell />
    },
    {
      title: 'fundings',
      component: <Fundings />
    },
    {
      title: 'results',
      component: <Results />
    },
  ]
  return (
    <div className="app">
      <div className="container">
        <div className="inputs-accordion">
          <AccordionView inputList={inputList} />
        </div>
        <div className="charts">
          <AccordionView inputList={inputList} />
        </div>
      </div>
    </div>
  );
}

export default App;
