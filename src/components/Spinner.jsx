import React from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';


const StyledSpinner = styled.div`
  .spinner {
    display: ${props => (props.spinnerOn ? "block" : "none")};
  }
  .children {
    display: ${props => (props.spinnerOn ? "none" : "block")};
  }
`;
// connect this component to the store, to get the "spinner" slice of state
export class Spinner extends React.Component {
  render() {
    return (
      <StyledSpinner spinnerOn={this.props.spinner}>
        <div className='spinner'>Please Wait...</div>
        <div className='children'>{this.props.children}</div>
      </StyledSpinner>
    );
  }
}

Spinner.propTypes = {
  spinner: bool,
};

const mapStateToProps = function (state) {
  return { spinner: state.spinner };
};

// default export the connected version!
export default connect(mapStateToProps)(Spinner);
