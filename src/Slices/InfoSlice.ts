import { createSlice } from '@reduxjs/toolkit';
const setInfo = (State: any, action: any) => {
  State.name = action;
}
const InfoSlice = createSlice({
  name: "InfoSlice",
  initialState: {
    name: '',
    color: '#000000',
  },
  reducers: {
    setInfo
  }
})

export const { setInfo: setInfoAction } = InfoSlice.actions;
export default InfoSlice.reducer;