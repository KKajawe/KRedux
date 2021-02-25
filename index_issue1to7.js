const redux = require('redux')
const createStore = redux.createStore


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

//reducer fun - require to make state transition based on action received by store
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,  //copy state object
            numOfCakes: state.numOfCakes - 1 // only changes property that need to be
        }
        default: return state
    }
}

//holds app state - createstore accepts reducer fun as parameter which contains app state 
const store = createStore(reducer)

//Store provides method getState() to get current state 
console.log('Initial state', store.getState())

//Allow app to subscribe to changes in state in store
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))

//store provides dispatch method to update state
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

//unsubscribe by calling fun return by subscribe method
unsubscribe()