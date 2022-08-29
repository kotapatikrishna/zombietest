import './App.css';
import React, { Component } from "react";

class App extends Component {

  state = {
    xoffset: 0,
    yoffset: 0,
    delta: 10,
  };

  moveTitleToDown = () => {
    this.setState(
      { yoffset: this.state.yoffset
        + this.state.delta });
  };
  moveTitleToRight = () => {
    this.setState(
      { xoffset: this.state.xoffset
        + this.state.delta });
  };
  moveTitleToLeft = () => {
    this.setState(
      { xoffset: this.state.xoffset
        - this.state.delta });
  };
  moveTitleToUp = () => {
    this.setState(
      { yoffset: this.state.yoffset
        - this.state.delta });
  };

  render() {
    return (
      <div className='App'>

         {/* position to start*/}
        <h2
          style={{
            position: "absolute",
            left: `${this.state.xoffset}px`,
            top: `${this.state.yoffset}px`,
            paddingLeft:`25%`
          }}
        >
          Zombie Test
        </h2>

        {/* as per L,R,U,D positions to move the placements */}
        <div style={{ marginTop: "80px" }}>
          <button onClick={this.moveTitleToRight}>
            Move To Right
          </button>
          <button onClick={this.moveTitleToDown}>
            Move To Down
          </button>
          <button onClick={this.moveTitleToLeft}>
            Move To Left
          </button>
          <button onClick={this.moveTitleToUp}>
            Move To Up
          </button>
        </div>
      </div>
    );
  }
}

export default App;