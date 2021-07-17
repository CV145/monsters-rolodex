import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import { SearchBox } from './components/search-box/search-box.component';

import './App.css';


//A component class can return HTML
class App extends Component {
  constructor() {
    super();

    //A state is like a struct 
    //Use setState() to change state info
    this.state = {
      //An array of objects representing monsters
      monsters: [],
      searchField: ''
    };
  }


  //Fetching content from a JSON file link - when is componentDidMount called?
  //What exactly is a response? what does => mean?
  //JSON file has an array of users and their data
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) //return response in json format
      .then(users => this.setState({ monsters: users })) //place users array into state struct
  }



  //e = synthetic event
  //context of arrow function is app component
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }


  //Anytime the state changes the component is re-rendered

  //Return monsters card list html, pass in monsters array as props parameters
  render() {

    //Pulling values from state
    const { monsters, searchField } = this.state;

    //Filter monsters according to search box 
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (<div className='App'>

      <h1> Monsters Rolodex </h1>

      <SearchBox
        placeholder='search monsters'
        handleChange={this.handleChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>);
  }
}

export default App;

//e.target.value returns the value of what was typed in the search bar
//The state's searchField string value is set to that ^


/*
Even if you don't fully understand this - it's still fun and a good way to spend your time. Just go through it
*/


/*
Synchronous code:
Wait until code finishes running before moving on to the next piece of code

Asynchronous code:
Takes x amount of time, the following code runs in the meantime

setState() is asynchronous - it doesn't happen immediately. To log to console effectively, pass a second argument (a callback)
*/


//The state alters the components