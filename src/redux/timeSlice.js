import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('timeStorage')?JSON.parse(localStorage.getItem('timeStorage')):{session:25,break:5}

export const timeSlice = createSlice({
    name:'time',
    initialState,
    reducers: {
        changeTime: (state,action)=>{

            state = action.payload;

            localStorage.setItem('timeStorage',JSON.stringify(state))

            return state;

        }
    }

})

export const {changeTime} = timeSlice.actions;
export default timeSlice.reducer;