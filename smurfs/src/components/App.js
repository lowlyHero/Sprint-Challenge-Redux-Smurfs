import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className='App'>
      <h1>Smurfs!</h1>
      <span>{this.props.smurfs.map(smurf => {
        return (
          <div>
          <li>{smurf.name}</li>
          <li>{smurf.age}</li>
          <li>{smurf.height}</li>
          </div>
        )
      })}</span>
    </div>
    );
  }
}


const mapStateToProps = state => ({
  smurfs: state.smurfs,
  isLoading: state.isLoading,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
