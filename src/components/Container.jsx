import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Quotes from './Quotes';
import QuoteForm from './QuoteForm';
import Spinner from './Spinner';
import Login from './Login';
import { login } from '../state/actionCreators';


const StyledContainer = styled.div`
  padding: 10px;
  nav {
    a {
      margin-right: 12px;
    }
  }
`;

export function ProtectedRoute() {
  return (
    <Route
      path='/quotes'
      render={() => (
        localStorage.getItem('userToken')
          ? (
            <Spinner>
              <Quotes />
              <QuoteForm />
            </Spinner>
          )
          : <Redirect to='/login' />
      )} />
  );
}

export function Container(props) {
  return (
    <Router>
      <StyledContainer>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/quotes'>My Quotes</Link>
          <Link to='/login'>Login</Link>
        </nav>

        <h3>Welcome to my site</h3>

        <ProtectedRoute />

        <Route
          path='/login'
          render={() => <Login login={props.login} />}
        />
      </StyledContainer>
    </Router>
  );
}

export default connect(st => st, { login })(Container);
