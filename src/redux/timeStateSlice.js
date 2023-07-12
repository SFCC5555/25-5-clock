import { createSlice } from "@reduxjs/toolkit";

const initialState = 'session';

export const timeStateSlice = createSlice({
    name:'timeState',
    initialState,
    reducers: {
        changeTimeState: (state,action)=>{

            state = action.payload;

            return state;

        }
    }

})

export const {changeTimeState} = timeStateSlice.actions;
export default timeStateSlice.reducer;