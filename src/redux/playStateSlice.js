import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const playStateSlice = createSlice({
    name:'playState',
    initialState,
    reducers: {
        changePlayState: (state,action)=>{

            state = action.payload;

            return state;

        }
    }

})

export const {changePlayState} = playStateSlice.actions;
export default playStateSlice.reducer;