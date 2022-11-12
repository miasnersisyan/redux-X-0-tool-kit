import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data : [
        {id : 1,text : '',color : 'white'},
        {id : 2,text : '',color : 'white'},
        {id : 3,text : '',color : 'white'},
        {id : 4,text : '',color : 'white'},
        {id : 5,text : '',color : 'white'},
        {id : 6,text : '',color : 'white'},
        {id : 7,text : '',color : 'white'},
        {id : 8,text : '',color : 'white'},
        {id : 9,text : '',color : 'white'}
    ]  
}


const dataSlicer = createSlice({
    name : 'data',
    initialState,
    reducers : {
        changeData : (state,action) => {
            state.data = action.payload
        }
    }
})

export const { changeData } = dataSlicer.actions

export default dataSlicer.reducer












