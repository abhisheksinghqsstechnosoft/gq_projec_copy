
import { configureStore } from '@reduxjs/toolkit'
import { userReducer, formReducer, selectReducer } from './reducer';


const store = configureStore({
    reducer: {
        select: selectReducer,
        user: userReducer,
        formData: formReducer
    }
})

export default store;