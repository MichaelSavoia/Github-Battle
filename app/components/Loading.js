var React = require('react');
var PropTypes = require('prop-types');

class Loading extends React.Component {
  render() {
    return (
      <div className="row" style={{margin: '100px auto'}}>
        <div className="loader-wrapper">
          <i className="loader fa fa-spinner fa-pulse fa-fw" style={{fontSize: '100px'}}></i>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }
}

module.exports = Loading;
