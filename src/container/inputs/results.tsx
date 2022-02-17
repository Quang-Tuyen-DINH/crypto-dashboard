import React from 'react';
import InputChild from '../../components/input-child/input-child';
import "./results.scss";

export default function Results() {
  return (
    <div>
    <h3 className='title'>results (abstract)</h3>
        <InputChild label="NAV ROI 1Y" type="success" disabled={true} defaultValue=""/>
        <InputChild label="Share Ratio" type="success" disabled={true} defaultValue=""/>
        <InputChild label="IRR 1Y" type="success" disabled={true} defaultValue=""/>
        <InputChild label="MAX DD" type="success" disabled={true} defaultValue=""/>
        <InputChild label="% Time Non Invested" type="success" disabled={true} defaultValue=""/>
        <InputChild label="# Operations" type="success" disabled={true} defaultValue=""/>
        <InputChild label="Cash in Vault/Invest (DCA + Initial)" type="success" disabled={true} defaultValue=""/>
    </div>
  )
}
