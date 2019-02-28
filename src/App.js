import React, { Component } from 'react';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        potColor: state.potColor,
        plantType: state.plantType,
        plantIsGrown: state.plantIsgrown,
        money: state.money,
        inventory: state.inventory,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        water: () => dispatch({type: "WATER"}),
        harvest: () => dispatch({type: "HARVEST"}),
        store: () => dispatch({type: "STORE"}),
        purchase: () => dispatch({type: "PURCHASE"}),
        plant: () => dispatch({type: "PLANT"}),
        changePot: () => dispatch({type: "CHANGE_POT"}),
    }
}


class App extends Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           potColor: "black",
//           plantType: "beginner",
//           plantIsGrown: false,
//           money: 10,
//           inventory: ["beginner"]
//       }
//   }

  render() {
      return(
          <div>
              <div>Home Page</div>
          </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
