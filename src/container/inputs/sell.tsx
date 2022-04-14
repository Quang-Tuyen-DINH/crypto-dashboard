import React from 'react';
import InputChild from '../../components/input-child/input-child';
import "./sell.scss";

export default function Sell() {
  return (
    <div>
      <div className='sell-container'>
        <div className="sell-inputs-section">
          <div className='sell-col'>
            <div className='sell-sub-title'>Trailing Stop Loss</div>
            <InputChild label="Time Period (Days)" type="primary" disabled={false} defaultValue=""/>
            <InputChild label="SL Threshold -20%/7per." type="primary" disabled={false} defaultValue=""/>
          </div>
          <div className='sell-col'>
            <div className='sell-sub-title'>Take profit</div>
            <InputChild label="on/off" type="warning" disabled={false} defaultValue=""/>
            <InputChild label="Avg RSI Time Period" type="primary" disabled={false} defaultValue=""/>
            <InputChild label="Sell when Avg RSI 5per." type="primary" disabled={false} defaultValue=""/>
            <InputChild label="TP Share of Ptf" type="primary" disabled={false} defaultValue=""/>
            <InputChild label="Cool Period (Days Before Next TP)" type="primary" disabled={false} defaultValue=""/>
          </div>
        </div>
      </div>
    </div>
  )
}
