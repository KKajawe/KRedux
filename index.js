const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applymiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()


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
const store = createStore(rootReducer,applymiddleware(logger))

//Store provides method getState() to get current state 
console.log('Initial state', store.getState())

//Allow app to subscribe to changes in state in store
const unsubscribe = store.subscribe(() =>{})

//store provides dispatch method to update state
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())


//unsubscribe by calling fun return by subscribe method
unsubscribe()