import React from 'react';
import {
  FormBuilder,
  FieldGroup,
  FieldControl,
  Validators,
  AbstractControl,
} from "react-reactive-form";
import "./scenario.scss";
import InputChild from "../../components/input-child/input-child"

export default function Senario() {
  const [botname, setBotname] = React.useState("-");
  const [scenarioBotM1Form, setBotM1Config] = React.useState(
    FormBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      rememberMe: false
    })
  )

  const fetchData = async() => {
    await fetch('/botname').then(res => res.json()).then(data => {
      setBotname(data.botname);
    });
  };

  const loginForm = FormBuilder.group({
    data: ["", Validators.required],
    startDate: ["", Validators.required],
    endDate: ["", Validators.required],
    timeFrame: ["", Validators.required],
    currency: ["", Validators.required],
    riskFreeRate: ["", Validators.required],
    totalWealth: ["", Validators.required],
    customerName: ""
  });

  const handleReset = () => {
      loginForm.reset();
  }
  const handleSubmit = (e: any) => {
      e.preventDefault();
      console.log("Form values", loginForm.value);
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
    <div>
      <h3 className='title'>scenario for {botname}</h3>
      <FieldGroup
      control={loginForm}
      render={({value, pristine, invalid}) => (
        <form onSubmit={() => handleSubmit}>
          <FieldControl
          name="customerName"
          render={({
            handler,
            pending,
            touched,
            hasError
          }: AbstractControl) => (
            <div>
              <label>Name:</label>
              <input {...handler()} />
              {pending && <i className="fa fa-spinner fa-spin" />}
              <div>
                <span>
                  {touched &&
                    hasError("required") &&
                    "Customer name is required"}
                </span>
              </div>
            </div>
          )}
        />
          <FieldControl
            name="data"
            render={({
              handler,
              pending,
              touched,
              hasError
            }: AbstractControl) => (
              <InputChild label="data" type="success" disabled={true} defaultValue="DAILY"/>
            )}
          />
          <FieldControl
            name="startDate"
            render={({}: AbstractControl) => (
              <InputChild label="start date" type="primary" disabled={false} defaultValue=""/>
            )}
          />
          <FieldControl
            name="endDate"
            render={({}: AbstractControl) => (
              <InputChild label="end date" type="primary" disabled={false} defaultValue=""/>
            )}
          />
          <FieldControl
            name="timeFrame"
            render={({}: AbstractControl) => (
              <InputChild label="time frame (days)" type="success" disabled={true} defaultValue="405.00"/>
            )}
          />
          <FieldControl
            name="currency"
            render={({}: AbstractControl) => (
              <InputChild label="currency" type="primary" disabled={false} defaultValue="USD"/>
            )}
          />
          <FieldControl
            name="riskFreeRate"
            render={({}: AbstractControl) => (
              <InputChild label="risk free rate" type="primary" disabled={false} defaultValue="8%"/>
            )}
          />
          <FieldControl
            name="totalWealth"
            render={({}: AbstractControl) => (
              <InputChild label="total wealth" type="primary" disabled={false} defaultValue="10000"/>
            )}
          />
          <FieldControl
          name="test"
          render={({
            handler,
            pending,
            touched,
            hasError
          }: AbstractControl) => (
            <div>
              <label>Name:</label>
              <input {...handler()} />
              {pending && <i className="fa fa-spinner fa-spin" />}
              <div>
                <span>
                  {touched &&
                    hasError("required") &&
                    "Customer name is required"}
                </span>
              </div>
            </div>
          )}
        />
          <button
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            // disabled={invalid}
          >
            Submit
          </button>
          <div>{JSON.stringify(loginForm.value)}</div>
        </form>
      )}
    />
    </div>
  );
}
