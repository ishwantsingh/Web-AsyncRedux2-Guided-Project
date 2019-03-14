import React from 'react';
import styled from 'styled-components';
// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Quotes from './Quotes';
import QuoteForm from './QuoteForm';
import Spinner from './Spinner';
import LoginForm from './Login';


const StyledContainer = styled.div`
  padding: 10px;
  nav {
    a {
      margin-right: 12px;
    }
  }
`;

// 1- use react router to break the app into /quotes and /login paths.
// 2- create links to these paths.
// 3- protect the quotes path to check localStorage for userToken.
export default function Container() {
  return (
    <StyledContainer>
      <Spinner>
        <Quotes />
        <QuoteForm />
      </Spinner>
      <LoginForm />
    </StyledContainer>
  );
}
