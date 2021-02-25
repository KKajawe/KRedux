const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//Action creator
function buyCake() {
    //return action object
    return {
        type: BUY_CAKE,
        info: 'First Redux action'
    }
}
function buyIceCream() {
    //return action object
    return {
        type: BUY_ICECREAM
    }
}
// //This approach first - 1 reducer for multiple actions
// //state of app is object
// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

// //reducer fun - require to make state transition based on action received by store
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE: return {
//             ...state,  //copy state object
//             numOfCakes: state.numOfCakes - 1 // only changes property that need to be
//         }
//         case BUY_ICECREAM: return {
//             ...state,  //copy state object
//             numOfIceCreams: state.numOfIceCreams - 1 // only changes property that need to be
//         }
//         default: return state
//     }
// }
const initialCakeState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,  //copy state object
            numOfCakes: state.numOfCakes - 1 // only changes property that need to be
        }
        default: return state
    }
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,  //copy state object
            numOfIceCreams: state.numOfIceCreams - 1 // only changes property that need to be
        }
        default: return state
    }
}

//to Combine multiple reducer , combineReducers method takes object of key value pair and value is reducer functions we created
const rootReducer =combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

//holds app state - createstore accepts reducer fun as parameter which contains app state 
const store = createStore(rootReducer)

//Store provides method getState() to get current state 
console.log('Initial state', store.getState())

//Allow app to subscribe to changes in state in store
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))

//store provides dispatch method to update state
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())


//unsubscribe by calling fun return by subscribe method
unsubscribe()