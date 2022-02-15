import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./scenario.scss"

export default function Senario() {
  return (
    <div>
      <h3>scenario</h3>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        {/* data */}
        <div className="input-section">
          <span className="label">
            data
          </span>
          <TextField className="input" label="" variant="filled" color="success" focused />
        </div>
        {/* start date */}
        <div className="input-section">
          <span className="label">
            start date
          </span>
          <TextField className="input" label="" variant="filled" color="success" focused />
        </div>
        {/* end date */}
        <div className="input-section">
          <span className="label">
            end date
          </span>
          <TextField className="input" label="" variant="filled" color="success" focused />
        </div>
        {/* time frame */}
        <div className="input-section">
          <span className="label">
            time frame (days)
          </span>
          <TextField className="input" label="" variant="filled" color="success" focused />
        </div>
        {/* currency */}
        <div className="input-section">
          <span className="label">
            currency
          </span>
          <TextField className="input" label="" variant="filled" color="success" focused />
        </div>
        {/* risk free rate */}
        <div className="input-section">
          <span className="label">
            risk free rate
          </span>
          <TextField className="input" label="" variant="filled" color="success" focused />
        </div>
        {/* total wealth */}
        <div className="input-section">
          <span className="label">
            total wealth
          </span>
          <TextField className="input" label="" variant="filled" color="success" focused />
        </div>
      </Box>
    </div>
  )
}
