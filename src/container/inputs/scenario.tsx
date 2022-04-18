import React from 'react';
import "./scenario.scss";
import InputChild from "../../components/input-child/input-child";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import State from '../../interfaces/state';
import botM1 from '../../interfaces/botM1';
import DraftChild from '../../components/draft-child/draft-child';
// import useInputService from './useInputService';

export default function Scenario() {
  React.useEffect(() => {
    fetchData();
    if(scenarioDrafts.length > 0) {
      setHasDrafts(true);
    }
  }, []);

  const dispatch = useDispatch();

  const [botname, setBotName] = React.useState("-");
  const fetchData = async() => {
    await fetch('/botname').then(res => res.json()).then(data => {
      setBotName(data.botname);
    });
  };

  //Form
  const [data, setData] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [timeFrame, setTimeFrame] = React.useState("");
  const [currency, setCurrency] = React.useState("");
  const [riskFreeRate, setRiskFreeRate] = React.useState("");
  const [totalWealth, setTotalWealth] = React.useState("");
  const [id, setId] = React.useState("");
  const [scenario, setScenario] = React.useState({});
  const [hasDrafts, setHasDrafts] = React.useState(false);

  //Set form
  const handleData = (e: any) => {
    setData(e.target.value);
  };
  const handleStartDate = (e: any) => {
    setStartDate(e.target.value);
  };
  const handleEndDate = (e: any) => {
    setEndDate(e.target.value);
  };
  const handleTimeFrame = (e: any) => {
    setTimeFrame(e.target.value);
  };
  const handleCurrency = (e: any) => {
    setCurrency(e.target.value);
  };
  const handleRiskFreeRate = (e: any) => {
    setRiskFreeRate(e.target.value);
  };
  const handleTotalWealth = (e: any) => {
    setTotalWealth(e.target.value);
  };
  const handleId = (e: any) => {
    const initialName = "bot";
    setId(initialName.concat(e.target.value));
  };

  const handleScenario = () => {
    let newScenario: botM1 = {
      id: id,
      data: data,
      startDate: startDate,
      endDate: endDate,
      timeFrame: timeFrame,
      currency: currency,
      riskFreeRate: riskFreeRate,
      totalWealth: totalWealth
    };
    
    saveScenario(newScenario);
    setHasDrafts(true);
  }

  const clearScenario = () => {
    setScenario({})
    return null
  }

  const saveScenario = (newScenario: botM1) => {
    dispatch({
      type: 'ADD_CFG_BOT_M1',
      payload: newScenario
    })
  }

  const scenarioDrafts = useSelector((state: State) => state.scenarioBotM1);

  return (
    <div>
      <div className="scenario-container">
        <div>{JSON.stringify(botname)}</div>
        <div className="scenario-inputs-section">
          <div className="scenario-col">
            <div onChange={handleData}>
              <InputChild label="data" type="success" disabled={true} defaultValue="DAILY"/>
            </div>
            <div onChange={handleStartDate}>
              <InputChild label="start date" type="primary" disabled={false} defaultValue=""/>
            </div>
            <div onChange={handleEndDate}>
              <InputChild label="end date" type="primary" disabled={false} defaultValue=""/>
            </div>
            <div onChange={handleTimeFrame}>
              <InputChild label="time frame (days)" type="success" disabled={true} defaultValue="405.00"/>
            </div>
          </div>
          <div className="scenario--col">
            <div onChange={handleCurrency}>
              <InputChild label="currency" type="primary" disabled={false} defaultValue=""/>
            </div>
            <div onChange={handleRiskFreeRate}>
              <InputChild label="risk free rate" type="primary" disabled={false} defaultValue=""/>
            </div>
            <div onChange={handleTotalWealth}>
              <InputChild label="total wealth" type="primary" disabled={false} defaultValue=""/>
            </div>
            <div onChange={handleId}>
              <InputChild label="id" type="primary" disabled={false} defaultValue=""/>
            </div>
          </div>
        </div>
        <div className="scenario-buttons-section">
          <Button className="scenario-button-add" onClick={handleScenario} variant="contained" color="inherit">
            Save
          </Button>
          <Button className="scenario-button-clear" onClick={clearScenario} variant="contained" color="inherit">
            Clear
          </Button>
        </div>
        <hr />
        <div className="scenario-draft-section">
          <div className='scenario-draft-title'>Drafts</div>
            {hasDrafts && (
              <div className="scenario-drafts-container">
                {scenarioDrafts.map((scenario: botM1) => (
                  <div className="scenario-draft">
                    <DraftChild key={`key-${scenario.id}`} draft={scenario}/>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
