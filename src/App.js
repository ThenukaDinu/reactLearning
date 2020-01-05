import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {

  //Array of objects 
  state = {
    ninjas : [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })    
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: ninjas
    })        
  }

  componentDidMount() {
    console.log("Component mounted");
    
  }

  componentDidUpdate(prevProp, prevState) {
    console.log("component updated");
    console.log(prevProp, prevState);
    
  }
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome </p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={ this.state.ninjas  /* Pass data to child component*/ } /> 
        <AddNinja addNinja={this.addNinja}></AddNinja>
      </div>
    );  
  }
}

export default App;
