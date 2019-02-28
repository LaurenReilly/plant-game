import React from 'react';
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

let Shop = (props) => {
    return (
        <div>
            
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);