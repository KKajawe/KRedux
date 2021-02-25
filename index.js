console.log("from Index.js")
const BUY_CAKE = 'BUY_CAKE'

//Action creator
function buyCake(){
    //return action object
    return {
        type: BUY_CAKE,
        info: 'First Redux action'
    }
}