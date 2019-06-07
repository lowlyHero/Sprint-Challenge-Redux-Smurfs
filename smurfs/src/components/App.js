import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddSmurf from '../components/AddSmurf';
import { getSmurfs } from '../actions';

import './App.css';

class App extends Component {
  state = {
    smurfs: []
  }

  addSmurf = (smurf) => {
    smurf.id = Date.now();
    let smurfs = [...this.state.smurfs, smurf];
    this.setState({
      smurfs
    })
  }

  render() {
    return (
      <div className='App'>
      <h1>Smurfs!</h1>
      <span>{this.props.smurfs.map(smurf => {
        return (
          <div>
          <li><strong>{smurf.name}</strong></li>
          <li>Age: {smurf.age}</li>
          <li>Height: {smurf.height}</li>
          </div>
        )
      })}</span>
      <AddSmurf addSmurf={this.addSmurf} />
    </div>
    );
  }
}


const mapStateToProps = state => ({
  smurfs: state.smurfs,
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
