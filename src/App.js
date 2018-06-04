import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import sushi from "./sushi.json";
import SushiCard from "./components/SushiCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import TopSection from "./components/TopSection";

class App extends Component {
  state = {
    score: 0
  }

  handleClicked = () => {
    this.setState({ score: this.state.score + 1 })
    alert("Hi")
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TopSection />
        <p>{this.state.score}</p>

        <div className="container">
          <div className="row">
            {sushi.map(sushiFromArray =>
              <SushiCard key={sushiFromArray.id} image={sushiFromArray.image} onClick={this.handleClicked} />
            )}

          </div>
        </div>

      </div>
    );
  }
}

export default App;
