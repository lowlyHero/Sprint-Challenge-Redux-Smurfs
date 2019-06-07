import React, { Component } from 'react';

class AddSmurf extends Component {
    state = {
        addSmurf: {
          name: '',
          age: '',
          height: ''
        }
      }

    handleChange = (e) => {
        this.setState({
            name: e.target.value,
            age: e.target.value,
            height: e.target.value
        })
    }
    
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.addSmurf(this.state);
        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }

      render() {
          return (
              <div>
                  <form onSubmit={this.handleSubmit}>
                      <label>Add a New Smurf: </label>
                      <input type='text' onChange={this.handleChange} value={this.state.name} />  
                      <input type='number' onChange={this.handleChange} value={this.state.age} />
                      <input type='number' onChange={this.handleChange} value={this.state.height} />
                      <button>Add Smurf</button>
                  </form>
              </div>
          )
      }
}

export default AddSmurf