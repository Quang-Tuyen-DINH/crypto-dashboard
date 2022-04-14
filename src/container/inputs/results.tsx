import React from 'react';
import InputChild from '../../components/input-child/input-child';
import "./results.scss";

export default function Results() {
  return (
    <div>
      <div className="results-container">
        <div className="results-inputs-section">
          <div className="results-col">
            <InputChild label="NAV ROI 1Y" type="success" disabled={true} defaultValue="test"/>
            <InputChild label="Share Ratio" type="success" disabled={true} defaultValue="test"/>
            <InputChild label="IRR 1Y" type="success" disabled={true} defaultValue="test"/>
            <InputChild label="MAX DD" type="success" disabled={true} defaultValue="test"/>
          </div>
          <div className="results-col">
            <InputChild label="% Time Non Invested" type="success" disabled={true} defaultValue="test"/>
            <InputChild label="# Operations" type="success" disabled={true} defaultValue="test"/>
            <InputChild label="Cash in Vault/Invest (DCA + Initial)" type="success" disabled={true} defaultValue="test"/>
          </div>
        </div>
      </div>
    </div>
  )
}
