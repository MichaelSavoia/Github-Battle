import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Loading extends Component {
  render() {
    return (
      <div className="row" style={{ margin: '100px auto' }}>
        <div className="loader-wrapper">
          <i
            className="loader fa fa-spinner fa-pulse fa-fw"
            style={{ fontSize: '100px' }}
          />
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
}

export default Loading;
