import { createSlice } from '@reduxjs/toolkit';
const setInfo = (State: any, action: any) => {
  return {
    ...State,
    name: action,
  };
}
const setColor = (State: any, action: any) => {
  return {
    ...State,
    color: action,
  };
}
const setDirection = (State: any, action: any) => {
  return {
    ...State,
    dir: action,
  };
}
const InfoSlice = createSlice({
  name: "InfoSlice",
  initialState: {
    name: '',
    color: '#000000',
    dir: false
  },
  reducers: {
    setInfo,
    setColor,
    setDirection,
  }
})

export const {
  setInfo: setInfoAction,
  setColor: setColorAction,
  setDirection: setDirectionAction,
} = InfoSlice.actions;
export default InfoSlice.reducer;