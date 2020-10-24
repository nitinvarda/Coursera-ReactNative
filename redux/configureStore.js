import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { DISHES } from './dishes'
import { COMMENTS } from './comments'
import { PROMOTIONS } from './promotions'
import { LEADERS } from './leaders'


export const configureStore = () => {
    const store = createStore(
        combineReducers({
            dishes,
            comments,
            promotions,
            leaders

        }),
        applyMiddleware(thunk, logger)
    )

    return store
}