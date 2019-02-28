import React from 'react';
import { withRouter } from 'react-router-dom';
// import {connect} from 'react-redux';

// let mapStateToProps = (state) => {
//     return {
//         potColor: state.potColor,
//         plantType: state.plantType,
//         plantIsGrown: state.plantIsgrown,
//         money: state.money,
//         inventory: state.inventory,
//     }
// }

// let mapDispatchToProps = (dispatch) => {
//     return {
//         water: () => dispatch({type: "WATER"}),
//         harvest: () => dispatch({type: "HARVEST"}),
//         store: () => dispatch({type: "STORE"}),
//         purchase: () => dispatch({type: "PURCHASE"}),
//         plant: () => dispatch({type: "PLANT"}),
//         changePot: () => dispatch({type: "CHANGE_POT"}),
//     }
// }

let Home = (props) => {
    
    return (
        <div>
            <p>POTCOLOR:{this.props.potColor}</p>
            <p>TYPE:{this.props.plantType}</p>
            <p>GROWN:{this.props.plantIsGrown ? "true" : "false"}</p>
            <p>MONEY:{this.props.money}</p>
            {this.props.inventory.map((item, i) => {
                return (
                    <p key={i}>item</p>
                )
            })}
        </div>
    )
}

export default withRouter(Home);
