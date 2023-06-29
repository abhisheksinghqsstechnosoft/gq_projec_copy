
import { configureStore } from '@reduxjs/toolkit'
import { selectReducer } from './reducer';


const store = configureStore({
    reducer: {
        select: selectReducer,

    }
})

export default store;