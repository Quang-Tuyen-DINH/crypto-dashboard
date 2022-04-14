import React from 'react';
import './App.scss';
import Inputs from "./inputs/inputs";
import AccordionView from './accordion-view/accordion-view';
import Scenario from './inputs/scenario';
import Buy from './inputs/buy';
import Sell from './inputs/sell';
import Fundings from './inputs/fundings';
import Results from './inputs/results';
import ChartView from './chart-view/chart-view';

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
      <h2 className="title">Bonjour Mathieu</h2>
      <div className="app-container">
        <div className="inputs-accordion">
          <span className="accordion-sub-title">Input configurations</span>
          <AccordionView inputList={inputList} />
        </div>
        <div className="charts-view">
          <span className="visuals-sub-title">Visuals</span>
          <ChartView />
        </div>
      </div>
    </div>
  );
}

export default App;
