import React, { Component } from "react";

const App=()=> {
  const [coordinates, setCoordinates] = useState({
                                   xoffset: 0,
                                   yoffset: 0,
                                   delta: 10,
                                 });

  moveTitleToDown = () => {
    setCoordinates(
      { yoffset: this.state.yoffset
        + this.state.delta });
  };
  moveTitleToRight = () => {
    setCoordinates(
      { xoffset: this.state.xoffset
        + this.state.delta });
  };
  moveTitleToLeft = () => {
    setCoordinates(
      { xoffset: this.state.xoffset
        - this.state.delta });
  };
  moveTitleToUp = () => {
    setCoordinates(
      { yoffset: this.state.yoffset
        - this.state.delta });
  };

  render() {
    return (
      <div>
        {/* position to start*/}
        <h2
          style={{
            position: "absolute",
            left: `${this.state.xoffset}px`,
            top: `${this.state.yoffset}px`,
          }}
        >
          Zombie Creatures
        </h2>

        {/* as per L,R,U,D positions to move the placements */}
        <div style={{ marginTop: "80px" }}>
          <button onClick={this.moveTitleToRight}>
            Move Start('0') position To Right
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