import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Quotes from './Quotes';
import QuoteForm from './QuoteForm';
import Spinner from './Spinner';

const StyledContainer = styled.div`
  padding: 10px;
  nav {
    a {
      margin-right: 12px;
    }
  }
`;

export default function Container() {
  return (
    <Router>
      <StyledContainer>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/quotes'>My Quotes</Link>
          <Link to='/login'>Login</Link>
        </nav>

        <h4>Welcome to my homepage</h4>

        <Route
          path='/quotes'
          render={() => (
            <Spinner>
              <Quotes />
              <QuoteForm />
            </Spinner>
          )} />

        <Route
          path='/login'
          render={() => <button>Login</button>}
        />
      </StyledContainer>
    </Router>
  );
}
