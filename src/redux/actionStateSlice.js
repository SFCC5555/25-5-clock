import { createSlice } from "@reduxjs/toolkit";

const initialState = 'session';

export const actionStateSlice = createSlice({
    name:'actionState',
    initialState,
    reducers: {
        changeActionState: (state,action)=>{

            state = action.payload;

            return state;

        }
    }

})

export const {changeActionState} = actionStateSlice.actions;
export default actionStateSlice.reducer;