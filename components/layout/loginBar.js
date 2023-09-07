import React from 'react';
import Button from '../form/button';
import TextInput from '../form/input';

const LoginBar = () => {

  const handleSubmit = () => {
    console.log("Check user credentials and log in!");
  };

  return (
    <section className="loginBar">
      <div className="loginBar__form">
        <form className="loginForm__form">
          <TextInput id="account" label="Account" placeholder="Nickname" type="text" maxLength={16}/>
          <TextInput id="password" label="Password" placeholder="******" type="password" maxLength={16}/>
          <Button className="button--tertiary" onClick={handleSubmit}>
            Login
          </Button>
        </form>
        <div className="loginForm__links">
          <a className="links__link" href="#">Password Lost?</a> | <a className="links__link" href="#">Create Account</a>
        </div>
      </div>
    </section>
  );
};

export default LoginBar;