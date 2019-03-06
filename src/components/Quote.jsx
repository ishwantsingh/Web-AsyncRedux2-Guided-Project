import React from 'react';
import { shape, string, func, bool } from 'prop-types';
import styled from 'styled-components';


const StyledQuote = styled.div`
  margin: 10px;
  padding: 8px;
  background-color: ${pr => (pr.highlight ? '#fffbc4' : '#f4f4f4')};
  .text {
    margin-bottom: 10px;
  }
  em {
    font-weight: bold;
  }
`;

export default class Quote extends React.Component {
  render() {
    const {
      quote,
      isQuoteOfTheDay,
      deleteQuoteAsync,
      makeQuoteOfTheDay,
    } = this.props;

    return (
      <StyledQuote highlight={isQuoteOfTheDay}>
        <div className='text'>{quote.text}</div>
        <em className='author'>{quote.author}</em>
        <div>
          <button onClick={() => deleteQuoteAsync(quote.id)}>Delete</button>
          <button onClick={() => makeQuoteOfTheDay(quote.id)}>Make Quote of the Day</button>
        </div>
      </StyledQuote>
    );
  }
}

Quote.propTypes = {
  quote: shape({
    author: string.isRequired,
    text: string.isRequired,
  }).isRequired,
  deleteQuoteAsync: func.isRequired,
  makeQuoteOfTheDay: func.isRequired,
  isQuoteOfTheDay: bool.isRequired,
};
