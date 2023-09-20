import { createSlice } from '@reduxjs/toolkit';
const Increment = (State: any) => {
    State.value += 1;
}
const Decrement = (State: any) => {
    State.value -= 1;
}
const FrameObject = createSlice({
    name: "FrameObject",
    initialState: { value: 0 },
    reducers: {
        Increment, Decrement
    }
})

export const { Increment: IncrementAction, Decrement: DecrementAction } = FrameObject.actions;
export default FrameObject.reducer;