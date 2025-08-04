import {configureStore} from '@reduxjs/toolkit' //we import this method to create store
import todoReducer from '../features/todo/todoSlice'
                                       
//store need to aware of reducers. because it is type of restricitive store so it can be managed by registerd reducers only.
export const store = configureStore({ // we export one variable using above method of creating store.
    reducer:todoReducer // here we register this reducer.
})

// every applications has only one store called single source of truth