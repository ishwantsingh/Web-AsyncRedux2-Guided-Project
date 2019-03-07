import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        {/* username input */}
        {/* password input */}
        {/* UNCONTROLLED -> USE REFS */}
        {/* LOGIN BUTTON invokes this.props.login */}
        {/* lOGOUT BUTTON invokes clear local storage */}
      </div>
    );
  }
}

// connect it so we get the login action creator
