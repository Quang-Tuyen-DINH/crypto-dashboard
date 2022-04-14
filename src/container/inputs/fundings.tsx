import React from 'react';
import InputChild from '../../components/input-child/input-child';
import "./fundings.scss";

export default function Fundings() {
  return (
    <div>
      <div className='fund-container'>
        <div className="fund-inputs-section">
          <div className='fund-col'>
            <div className='fund-sub-title'>Inital Investment</div>
            <InputChild label="% Wealth for this Strategy" type="primary" disabled={false} defaultValue=""/>
            <InputChild label="Inital Amount" type="success" disabled={true} defaultValue=""/>
          </div>
          <div className='fund-col'>
            <div className='fund-sub-title'>DCA</div>
            <InputChild label="on/off" type="warning" disabled={false} defaultValue=""/>
            <InputChild label="DCA Funding" type="primary" disabled={false} defaultValue=""/>
            <InputChild label="Periodicity" type="primary" disabled={false} defaultValue=""/>
            <InputChild label="Priming then Stop" type="primary" disabled={false} defaultValue=""/>
          </div>
        </div>
      </div>
    </div>
  )
}
