import React, { Component } from 'react';

class AddSmurf extends Component {
    state = {
        addSmurf: {
          name: '',
          age: '',
          height: ''
        }
      }

    handleChange = e => {
        this.setState(prevState => ({
          newSmurf: {
            ...prevState.newSmurf,
            [e.target.name] : e.target.value
          }
        }))
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
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
                      <input type='text' onChange={this.handleChange} value={this.state.addSmurf} />  
                  </form>
              </div>
          )
      }
}

export default AddSmurf