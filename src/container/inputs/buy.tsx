import React from 'react';
import InputChild from '../../components/input-child/input-child';
import "./buy.scss";

export default function Buy() {
  return (
    <div>
      <div className='buy-container'>
        <div className='buy-col'>
          <div className='sub-title'>Launch Periodic</div>
          <InputChild label="on/off" type="warning" disabled={false} defaultValue="1"/>
          <InputChild label="Strategy Starts (# day of month)" type="primary" disabled={false} defaultValue="1"/>
          <InputChild label="Avg RSI Avg Time Period" type="primary" disabled={false} defaultValue="5"/>
          <InputChild label="Buy Periodic when Avg RSI" type="primary" disabled={false} defaultValue="60.0"/>
        </div>
        <div className='buy-col'>
          <div className='sub-title'>Relaunch after SL</div>
          <InputChild label="on/off" type="warning" disabled={false} defaultValue="1"/>
          <InputChild label="# Days after Stop Loss triggered (Days)" type="primary" disabled={false} defaultValue="3.0"/>
          <InputChild label="Avg RSI Avg Time Period" type="success" disabled={true} defaultValue="5"/>
          <InputChild label="ReLauch when Avg RSI" type="success" disabled={true} defaultValue="60.0"/>
        </div>
        <div className='buy-col'>
          <div className='sub-title'>Buy the dip</div>
          <InputChild label="on/off" type="warning" disabled={false} defaultValue="1"/>
          <InputChild label="Avg RSI Avg Time Period" type="success" disabled={true} defaultValue="5"/>
          <InputChild label="BuyDips when Avg RSI <" type="primary" disabled={false} defaultValue="30"/>
          <InputChild label="Cool Period (Days Before Next Buy)" type="primary" disabled={false} defaultValue="7.0"/>
          <InputChild label="Share of Reserve Invested" type="primary" disabled={false} defaultValue="100%"/>
          <InputChild label="Share of Vault Invested" type="primary" disabled={false} defaultValue="20%"/>
        </div>
      </div>
    </div>
  )
}
