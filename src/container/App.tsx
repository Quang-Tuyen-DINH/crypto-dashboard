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
      id: 'accord1',
      title: 'scenario',
      component: <Scenario />
    },
    {
      id: 'accord2',
      title: 'buy',
      component: <Buy />
    },
    {
      id: 'accord3',
      title: 'sell',
      component: <Sell />
    },
    {
      id: 'accord4',
      title: 'fundings',
      component: <Fundings />
    },
    {
      id: 'accord5',
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
