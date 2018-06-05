import React, { Component } from 'react';
import './App.css';
import sushi from "./sushi.json";
import SushiCard from "./components/SushiCard";

import Header from "./components/Header";
import TopSection from "./components/TopSection";


class App extends Component {

  state = {
    score: 0, //current score
    highscore: 0,
    sushi, //initially, this is an exact copy of sushi from the json object
    idPicked: []  //holds indexes of previously picked items
  }


  //************************************************************************************ */
  //shuffle Function = Fisher-Yates Shuffle, shuffles array contents.
  //**************************************************************************************/
  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  //************************************************************************************* */
  //reinitialize Function = sets the state variables score and idPicked to 0 and empty array.  
  //This function also rerenders the sushi in a randomized fashion.
  //      Other functions used:  randomRender()
  //*************************************************************************************** */
  reinitialize = () => {
    this.setState({ score: 0 })
    this.setState({ idPicked: [] })
    this.randomRender()    
  }


  //************************************************************************************* */
  //randomRender Function = sets the state variables score and idPicked to 0 and empty array.  
  //This function also rerenders the sushi in a randomized fashion.
  //      Other functions used:  shuffle()
  //*************************************************************************************** */
  randomRender = () => {
    this.shuffle(this.state.sushi).map(sushiFromArray =>
      <SushiCard key={sushiFromArray.id} id={sushiFromArray.id} image={sushiFromArray.image} handleClicked={this.handleClicked} />
    )
  }





  //*************************************************************************************** */
  //handleClicked Function = Once a sushi is clicked, values are passed to state variables.  This is also
  //where it's determined if the game goes on, won, or lost.
  //      Other functions used: reinitialize(), randomRender()
  //**************************************************************************************** */
  handleClicked = id => {
    this.setState({ score: this.state.score + 1 })
    this.setState({ idPicked: [...this.state.idPicked, id] })

    //If picked index was previously picked, game ends. score is reset, highscore is set if it makes sense,
    //and randomized sushi cards are rerendered via reinitialize
    for (var i = 0; i < this.state.idPicked.length; i++) {
      if (id === parseInt(this.state.idPicked[i])) {
        //debug - console.log(id + "in there already")
        if (this.state.score > this.state.highscore) {
          this.setState({ highscore: this.state.score })
        }
        this.reinitialize()

      }
    }
    this.randomRender()
  }



  render() {
    return (
      <div className="App">
        <Header />
        <TopSection score={this.state.score} topscore={this.state.highscore} />

        <div className="container">
          <div className="row">
            {sushi.map(sushiFromArray =>
              <SushiCard key={sushiFromArray.id} id={sushiFromArray.id} image={sushiFromArray.image} handleClicked={this.handleClicked} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
