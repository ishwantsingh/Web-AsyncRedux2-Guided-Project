import React from 'react';
import { connect } from 'react-redux';
import { arrayOf, shape, string, func } from 'prop-types';
import { bindActionCreators } from 'redux';
import { deleteQuoteAsync, makeQuoteOfTheDay, fetchQuotes } from '../state/actionCreators';
import Quote from './Quote';


export class Quotes extends React.Component {
  componentDidMount() {
    this.props.fetchQuotes();
  }

  render() {
    return (
      <div>
        <h3>My Favorite Quotes</h3>
        <div>
          {
            this.props.quotes.map(quote => (
              <Quote
                key={quote.id}
                quote={quote}
                isQuoteOfTheDay={this.props.quoteOfTheDay === quote.id}
                deleteQuoteAsync={this.props.deleteQuoteAsync}
                makeQuoteOfTheDay={this.props.makeQuoteOfTheDay}
              />
            ))
          }
        </div>
        <button onClick={this.props.wakeUpSaga}>start request</button>
      </div>
    );
  }
}

Quotes.propTypes = {
  // data from store
  quotes: arrayOf(shape({
    id: string.isRequired,
    author: string.isRequired,
    text: string.isRequired,
  })).isRequired,
  quoteOfTheDay: string, // not required because `null` is legit value for this prop
  // action creators
  fetchQuotes: func.isRequired,
  deleteQuoteAsync: func.isRequired,
  makeQuoteOfTheDay: func.isRequired,
};

function mapStateToProps(state) {
  return {
    quotes: state.quotes,
    quoteOfTheDay: state.quoteOfTheDay,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteQuoteAsync,
    makeQuoteOfTheDay,
    fetchQuotes,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
