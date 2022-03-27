import React from 'react';
import {
  FormBuilder,
  FieldGroup,
  FieldControl,
  Validators,
} from "react-reactive-form";
import "./scenario.scss";
import InputChild from "../../components/input-child/input-child"

export default function Senario() {
  const [botname, setBotname] = React.useState("-");

  const fetchData = async() => {
    await fetch('/botname').then(res => res.json()).then(data => {
      setBotname(data.botname);
    });
  };

  const loginForm = FormBuilder.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
    rememberMe: false
});

  const handleReset = () => {
      this.loginForm.reset();
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form values", this.loginForm.value);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    // <div>
    //   <h3 className='title'>scenario for {botname}</h3>
    //     <InputChild label="data" type="success" disabled={true} defaultValue="DAILY"/>
    //     <InputChild label="start date" type="primary" disabled={false} defaultValue=""/>
    //     <InputChild label="end date" type="primary" disabled={false} defaultValue=""/>
    //     <InputChild label="time frame (days)" type="success" disabled={true} defaultValue="405.00"/>
    //     <InputChild label="currency" type="primary" disabled={false} defaultValue="USD"/>
    //     <InputChild label="risk free rate" type="primary" disabled={false} defaultValue="8%"/>
    //     <InputChild label="total wealth" type="primary" disabled={false} defaultValue="10000"/>
    // </div>
    <FieldGroup
    control={this.loginForm}
    render={({ get, invalid }) => (
      <form onSubmit={this.handleSubmit}>

        <FieldControl
          name="username"
          render={TextInput}
          meta={{ label: "Username" }}
        />
        <button
          type="button"
          onClick={this.handleReset}
        >
          Reset
        </button>
        <button
          type="submit"
          disabled={invalid}
        >
          Submit
        </button>
      </form>
    )}
  />
  );
}
