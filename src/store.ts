import { configureStore } from "@reduxjs/toolkit";
import FrameObject from "./Slices/FrameObject";
const Store = configureStore({
    reducer: {
        FrameObject: FrameObject
    }
})

export default Store;