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
const setPage = (State: any, action: any) => {
  return {
    ...State,
    page: action,
  };
}
const setPreviousPage = (State: any, action: any) => {
  return {
    ...State,
    page: action,
  };
}
const InfoSlice = createSlice({
  name: "InfoSlice",
  initialState: {
    name: '',
    color: '#000000',
    dir: false,
    page:1,
  },
  reducers: {
    setInfo,
    setColor,
    setDirection,
    setPage,
    setPreviousPage,
  }
})

export const {
  setInfo: setInfoAction,
  setColor: setColorAction,
  setDirection: setDirectionAction,
  setPage:setPageAction,
  setPreviousPage:setPreviousPageActions,
} = InfoSlice.actions;
export default InfoSlice.reducer;