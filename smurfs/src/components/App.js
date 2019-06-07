import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs, addSmurf } from '../actions';

import './App.css';

class App extends Component {
  state = {
    addSmurf: {
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleChange = e => {
    this.setState(prevState => ({
      newSmurf: {
        ...prevState.newSmurf,
        [e.target.name] : e.target.value
      }
    }))
  }

  newSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.newSmurf);
    this.setState({
      newSmurf: {
        name: '',
        age: '',
        height: ''
      }
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
      <form onSubmit={this.addSmurf}>
      <input type='text' name='name' value={this.state.newSmurf.name} onChange={this.handleChange} />
      <input type='number' name='age' value={this.state.newSmurf.age} onChange={this.handleChange} />
      <input type='number' name='height' value={this.state.newSmurf.height} onChange={this.handleChange} />
      <button>Add Smurf</button>
      </form>
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
  { getSmurfs, addSmurf }
)(App);
