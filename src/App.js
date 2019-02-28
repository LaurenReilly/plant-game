import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';

import {Home} from './components/Home';
import {Shop} from './components/Shop';

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
        purchase: () => dispatch({type: "PURCHASE"}),
        plant: () => dispatch({type: "PLANT"}),
        changePot: () => dispatch({type: "CHANGE_POT"}),
    }
}


class App extends Component {

  render() {
      return(
          <div>
              <div>Home Page</div>
              <Switch>
                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/store" component={Shop}></Route>
              </Switch>
          </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
