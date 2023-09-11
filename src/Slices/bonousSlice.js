import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    points: 1
}

export const bonousSlice = createSlice({
    name: "bonous",
    initialState,
    reducers: {
        incBonus: (state) => {
            state.points += 1
        }
    }
})

export const { incBonus } = bonousSlice.actions;
export default bonousSlice.reducer;