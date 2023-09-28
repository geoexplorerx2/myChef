import { createSlice } from '@reduxjs/toolkit';
const setInfo = (State: any, action: any) => {
  return {
    ...State,
    name: action, // Assuming that the color value is in the payload property of the action
  };
}
const setColor = (State: any, action: any) => {
  return {
    ...State,
    color: action, // Assuming that the color value is in the payload property of the action
  };
}
const InfoSlice = createSlice({
  name: "InfoSlice",
  initialState: {
    name: '',
    color: '#000000',
  },
  reducers: {
    setInfo,
    setColor,
  }
})

export const { setInfo: setInfoAction, setColor: setColorAction } = InfoSlice.actions;
export default InfoSlice.reducer;