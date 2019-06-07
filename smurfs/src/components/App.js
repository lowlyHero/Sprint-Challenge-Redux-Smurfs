import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

import './App.css';

const App = props => {
  const fetchSmurf = e => {
    e.preventDefault();
    props.getSmurfs();
  };

    return (
      <div className='App'>
      <h1>Smurfs!</h1>
      {props.smurfs && (
        <div>
          <p>{props.smurfs.name}</p>
          <p>{props.smurfs.height}</p>
          <p>{props.smurfs.age}</p>
       </div>
      )}
 
    <button onClick={fetchSmurf}>Get Smurfs</button>
    </div>
    );
};

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  isLoading: state.isLoading,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
