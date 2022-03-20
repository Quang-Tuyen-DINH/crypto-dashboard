import React from 'react';
import "./scenario.scss";
import InputChild from "../../components/input-child/input-child"

export default function Senario() {
  const [botname, setBotname] = React.useState("-");

  React.useEffect(() => {
    fetch('/botname').then(res => res.json()).then(data => {
      setBotname(data.botname);
    });
  }, []);

  return (
    <div>
      <h3 className='title'>scenario for {botname}</h3>
        <InputChild label="data" type="success" disabled={true} defaultValue="DAILY"/>
        <InputChild label="start date" type="primary" disabled={false} defaultValue=""/>
        <InputChild label="end date" type="primary" disabled={false} defaultValue=""/>
        <InputChild label="time frame (days)" type="success" disabled={true} defaultValue="405.00"/>
        <InputChild label="currency" type="primary" disabled={false} defaultValue="USD"/>
        <InputChild label="risk free rate" type="primary" disabled={false} defaultValue="8%"/>
        <InputChild label="total wealth" type="primary" disabled={false} defaultValue="10000"/>
    </div>
  )
}
