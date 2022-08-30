import { Component } from "react";
import CardList from "./components/card-list/card-list.components";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";



// constructor run first when the object is created, then the render run, then componentDidMount run
class App extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      monsters: [],
      searchString: "",
    };

    this.filterKey = "";
  }

  // called when the component fist add to the page
  componentDidMount() {
    console.log("componentDidMount");
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.monsters = users;
        this.setState(() => {
          return { monsters: users };
        });
      });
  }

  render() {
    //object decomposition
    const { monsters, searchString } = this.state;
    const { searchOnchange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={searchOnchange}
          placeholder={"search monsters"}
          className={"monster-search-box"}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

  searchOnchange = (event) => {
    const searchString = event.target.value.toLowerCase();
    this.setState({ searchString });
  };
}

export default App;
