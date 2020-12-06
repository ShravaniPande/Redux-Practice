console.log("Hello World!");
import store from './store'

import { bugAddedAction, bugRemovedAction } from './actions';

const unsubscribe = store.subscribe(() => {
    console.log("Curr Store: ", store.getState())
}) 

//what if we want to dispatch the same action multiple times?
//We will have to repeat the same structure every time.
//Instead, we can define the actions as functions in some other place (actions.js) and pass the parameters from here

// store.dispatch({
//     type: actions.BUG_ADDED,
//     payload: {
//         description: "new bug"
//     }
// })

// The above code will get converted to the following:

store.dispatch(bugAddedAction("Bug1")) 

// unsubscribe()

// store.dispatch({
//     type: actions.BUG_REMOVED,
//     payload: {
//         id : 1
//     }
// })
store.dispatch(bugRemovedAction(1))
