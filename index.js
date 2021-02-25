console.log("from Index.js")
const BUY_CAKE = 'BUY_CAKE'

//Action creator
function buyCake() {
    //return action object
    return {
        type: BUY_CAKE,
        info: 'First Redux action'
    }
}
//state of app is object
const initialState = {
    numOfCakes: 10
}

//reducer fun
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,  //copy state object
            numOfCakes: state.numOfCakes - 1 // only changes property that need to be
        }
        default: return state
    }
}
