import { createSlice } from '@reduxjs/toolkit';
const setName = (State: any, action: any) => {
  State.name = action;
}
const NameSlice = createSlice({
  name: "NameSlice",
  initialState: { name: '', color: '#000000' },
  reducers: {
    setName
  }
})

export const { setName: setNameAction } = NameSlice.actions;
export default NameSlice.reducer;