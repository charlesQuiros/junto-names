import React, { Component } from "react";
import InputForm from "./Components/InputForm/InputForm";
import "./Components/FontAwesomeIcons";
import Header from "./Components/Header/Header";
import NamesList from "./Components/NamesList/NamesList";
import ViewResults from "./Components/ViewResults/ViewResults";
import firebase from "./firebase";
import "./App.css";

// firebase.firestore().collection("names").add({
//   title: "Junto Club",
//   approved: 1,
// });

class App extends Component {
  state = {
    userInput: { id: "", name: "" },
  };
  //TODO MIGHT have to refactor the state so that it uses an array instead depending on how firebase works

  nameChangedHandler = (event) => {
    //TODO Need to set a limit to the number of characters
    const userInput = event.target.value;
    this.setState({
      userInput: {
        name: userInput,
      },
    });
    console.log(this.state.userInput.name);
  };
  //Deprecated, switched over to firebase instead of managing with internal state

  render() {
    return (
      <div className="App">
        <div>
          <Header />
          <InputForm
            name={this.state.userInput.name}
            changed={this.nameChangedHandler}
            clicked={this.submitNameHandler}
          />
          <NamesList />
          <ViewResults />
        </div>
      </div>
    );
  }
}

export default App;
