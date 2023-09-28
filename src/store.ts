import { configureStore } from "@reduxjs/toolkit";
import FrameObject from "./Slices/FrameObject";
import PostSlice from "./Slices/PostSlice";
import NameSlice from "./Slices/NameSlice";
const Store = configureStore({
    reducer: {
        /** FrameObject is Reducer which we use it at Selectors using useSelector Hook */
        /** const Value = useSelector((state: any) => state.FrameObject.value); */
        /** initialState is value at const Value = useSelector((state: any) => state.FrameObject.value); */
        /** -------------------------------------------------------------------------------------------- */
        /** const FrameObject = createSlice({
            name: "FrameObject",
            initialState: { value: 0 },
            reducers: {
                Increment, Decrement
             }
        }) */
        /** -------------------------------------------------------------------------------------------- */
        FrameObject: FrameObject,
        PostSlice: PostSlice,
        NameSlice:NameSlice,
    }
})

export default Store;