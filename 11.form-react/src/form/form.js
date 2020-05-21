import React from "react";
import "./form.css";

const userData = {
  password: "123",
  login: "1@gmail.com",
  userName: "Marina",
  userLastName: "Budz",
  userPhone: 23223432
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      password: "",
      email: "",
      authorized: false
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  handleEmailChange(event) {
    event.preventDefault();
    const checkEmail = event.target.value;
    this.setState({
      email: checkEmail
    });
  }
  handlePasswordChange(event) {
    event.preventDefault();
    const checkPassword = event.target.value;
    this.setState({
      password: checkPassword
    });
  }
  handleCheckBox(event) {
    event.preventDefault();
    const checked = event.target.checked;
    this.setState({
      isChecked: checked
    });
  }
  handleSubmit() {
    if (
      this.state.password === userData.password &&
      this.state.email === userData.login &&
      this.state.isChecked
    ) {
      this.setState({
        authorized: true
      });
    }
  }

  onClick() {
    this.setState({
      authorized: false
    });
  }

  render() {
    const { authorized, password, email, isChecked } = this.state;
    console.log(authorized);
    const logInForm = (
      <form onSubmit={this.handleSubmit} className="log-in-form">
        <h1 className="log-in-form__title">SIGN IN TO YOUR ACCOUNT </h1>
        <div className="inputs">
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="inputs__item"
            onChange={this.handleEmailChange}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            className="inputs__item"
            onChange={this.handlePasswordChange}
          />

          <label>
            <input
              type="checkbox"
              value={isChecked}
              id="checkBox"
              className="inputs__checkBox"
              onChange={this.handleCheckBox}
            />
            Keep me signed in
          </label>
          <button className="inputs__submit inputs__item"> Sign In</button>
        </div>
        <p className="log-in-form__footer"> Forgot your password</p>
      </form>
    );
    const signUp = (
      <div className="sign-up-form">
        <h1 className="sign-up-form__title"> You are successfully Loged in!</h1>
        <h3 className="sign-up-form__greeting">
          Welcome back {userData.userName} {userData.userLastName}
        </h3>
        <p className="sign-up-form__footer">
          Your phone number is: {userData.userPhone}
        </p>
        <button onClick={this.onClick} className="inputs__submit inputs__item">
          Log off
        </button>
      </div>
    );
    return (
      <div>
        <h1>{authorized ? signUp : logInForm}</h1>
      </div>
    );
  }
}

export default Form;
