
import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './allState/allState'
import letPlayReducer from './letPlay/letPlay'

const store = configureStore({
    reducer : {
       data : dataReducer,
       letPlay : letPlayReducer
    }
})

export default store

