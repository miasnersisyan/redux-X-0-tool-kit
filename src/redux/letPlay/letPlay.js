import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    letPlay : 0
}


const letPlaySlicer = createSlice({
    name : 'letPlay',
    initialState,
    reducers : {
        changeLetPlay : (state,action) => {
            state.letPlay = action.payload
        }
    }
})

export const { changeLetPlay } = letPlaySlicer.actions

export default letPlaySlicer.reducer


