import React from 'react';

export default class Login extends React.Component {
  nameRef = React.createRef()

  passwordRef = React.createRef()

  onClick = () => {
    this.props.login(
      this.nameRef.current.value,
      this.passwordRef.current.value,
    );
  }

  render() {
    return (
      <div>
        <div>Name <input ref={this.nameRef} /></div>
        <div>Password <input ref={this.passwordRef} /></div>
        <button onClick={this.onClick}>Login</button>
        <button onClick={() => localStorage.clear()}>Log Out</button>
      </div>
    );
  }
}
