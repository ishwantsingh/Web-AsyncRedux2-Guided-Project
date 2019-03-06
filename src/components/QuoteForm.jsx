import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { func, number } from 'prop-types';
import { addQuoteAsync } from '../state/actionCreators';


export class QuoteForm extends React.Component {
  authorRef = React.createRef()

  textRef = React.createRef()

  onAddQuote = () => {
    const authorInput = this.authorRef.current;
    const textInput = this.textRef.current;

    const newQuote = {
      author: authorInput.value,
      text: textInput.value,
    };

    this.props.addQuoteAsync(newQuote);

    authorInput.value = '';
    textInput.value = '';
  }

  render() {
    return (
      <div>
        <h3>You have {this.props.numberOfQuotes}. Add New Quote!</h3>
        <div>
          <em>Author: </em>
          <input ref={this.authorRef} type="text" />
        </div>
        <div>
          <em>Text: </em>
          <input ref={this.textRef} type="text" />
        </div>
        <div>
          <button onClick={this.onAddQuote}>Add Quote</button>
        </div>
      </div>
    );
  }
}

QuoteForm.propTypes = {
  // data
  numberOfQuotes: number.isRequired,
  // action creator
  addQuoteAsync: func.isRequired,
};

function mapStateToProps(state) {
  return {
    numberOfQuotes: state.quotes.length,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addQuoteAsync,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteForm);
