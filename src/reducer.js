const initialState = {
    potColor: "black",
    plantType: "beginner",
    plantIsGrown: false,
    money: 10,
    inventory: ["beginner"],  
}

const reducer = (state = initialState, action) => {
    let { type } = action;

    if (type === "WATER") {
        return {
            ...state,
            plantIsGrown: true
        }
    } else if (type === "HARVEST") {
        return {
            ...state,
            plantIsGrown: false,
            money: state.money + 10,
            plantType: "No Plant",
        }
    } else if (type === "PURCHASE") {
        return {
            ...state,
            money: state.money - 10,
            inventory: [...state.inventory, "beginner"]
        }
    } else if (type === "PLANT") {
        return {
            ...state,
            plantIsGrown: false,
            plantType: "beginner",
        }
    } else if (type === "CHANGE_POT") {
        return {
            potColor: "red"
        }
    } 
    return state;
}
export default reducer;