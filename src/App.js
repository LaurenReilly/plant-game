import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          potColor: "black",
          plantType: "beginner",
          plantIsGrown: false,
          money: 10,
          inventory: ["beginner"]
      }
  }

  render() {
      return(
          <div>
              <div>Home Page</div>
          </div>
      )
  }
}

export default App;
