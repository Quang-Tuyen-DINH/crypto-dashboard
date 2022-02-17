import React from 'react';
import TextField from '@mui/material/TextField';
import "./input-child.scss";

export default function InputChild(
    props: {
      label: string,
      type: "error" | "primary" | "secondary" | "info" | "success" | "warning",
      disabled: boolean,
      defaultValue: string
    }
  ) {
  const label: string = props.label;
  const type: "error" | "primary" | "secondary" | "info" | "success" | "warning" = props.type;
  const disabled: boolean = props.disabled;
  const defaultValue: string = props.defaultValue;
  let input;
  if (disabled) {
    input = <TextField disabled size='small' defaultValue={defaultValue} label="" color={type} focused />
  } else {
    input = <TextField size='small' defaultValue={defaultValue} label="" color={type} focused />
  }

  return (
    <div>
      <div className="input-section">
          <span className="label">
            {label}
          </span>
          <div className="input-field">
            {input}
          </div>
        </div>
    </div>
  )
}
