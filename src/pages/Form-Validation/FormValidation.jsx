import React from "react";
import { FormErrors } from "./FormError";


class FormValidation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      password: "",

      emailaddressValid: false,
      passwordValid: false,
      formValid: false,

      formErrors: {
        emailAddress: "",
        password: "",
      },
    };
  }

  handleUserInput = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    this.setState({ [fieldName]: fieldValue }, () => {
      this.validateField(fieldName, fieldValue);
    });
  };

  validateField(fieldName, fieldValue) {
    let fieldValidationErrors = this.state.formErrors;
    let emailaddressValid = this.state.emailaddressValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "emailAddress":
        emailaddressValid = fieldValue.match(
          /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        );
        fieldValidationErrors.emailAddress = emailaddressValid
          ? ""
          : " is invalid!";
        break;

      case "password":
        passwordValid = fieldValue.match(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
        );
        fieldValidationErrors.password = passwordValid ? "" : " is wrong!";
        break;

      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailaddressValid: emailaddressValid,
        passwordValid: passwordValid,
      },
      this.validForm
    );
  }

  validForm() {
    this.setState({
      formValid: this.state.emailaddressValid && this.state.passwordValid,
    });
  }

  render() {
    return (


      <div className=" flex flex-col justify-center mt-30 items-center">
        <h1 className="font-bold pb-5">Form Validation</h1>
        <form className="border border-black pb-5">
          <div className="m-4">
            <label className=" flex flex-col justify-center items-center mb-4">Email Address :</label>
            <div className=" flex flex-col justify-center items-center">
                <input
              type="text"
              name="emailAddress"
              value={this.state.emailAddress}
              placeholder="ex. abc@gmail.com"
              className="ml-5 border rounded-md border-black p-5 "
              onChange={this.handleUserInput}
            /></div>

          </div>
          <div className="flex flex-col justify-center items-center">
          <FormErrors formErrors={this.state.formErrors} />
          </div>

          <div className="m-4">
            <label className="flex flex-col justify-center items-center mb-4">Password :</label>
            <div className="flex flex-col justify-center items-center">
            <input
              type="text"
              name="password"
              value={this.state.password}
              placeholder="ex. Kaushal123"
              className="ml-5 border rounded-md border-black p-5"
              onChange={this.handleUserInput}
            />
            </div>

          </div>


          <div className="justify-center">
            <div className="flex flex-col justify-center items-center">
            <input
              type="button"
              className="bg-red-500 rounded-md text-white px-2 py-1  cursor-pointer font-bold "
              value="Login"
              disabled={!this.state.formValid}
            />
            </div>

          </div>
        </form>
      </div>

    );
  }
}

export default FormValidation;
