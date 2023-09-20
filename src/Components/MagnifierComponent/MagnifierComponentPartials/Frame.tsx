import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Posts } from '../../../Slices/PostSlice'
/**
 * PostSlice.ts
  export const Posts: any = createAsyncThunk('posts/fetch', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  })
 */
import { IncrementAction, DecrementAction } from '../../../Slices/FrameObject'
const Frame = () => {
    const Dispatch = useDispatch();
    /** 
     *  FrameObject.ts
     *  const FrameObject = createSlice({
            name: "FrameObject",
            initialState: { value: 0 },
            reducers: {
                Increment, Decrement
            }
        }) 
    */
    const Value = useSelector((state: any) => state.FrameObject.value);
    return (
        <>
            <div className='w-full h-28 bg-slate-700 px-20 text-2xl text-white'>
                Value : {Value}
            </div>
            <div className='w-full flex'>
                <button onClick={() => Dispatch(IncrementAction())} className='bg-white px-10 py-8 text-black mx-5'>Increment</button>
                <button onClick={() => Dispatch(DecrementAction())} className='bg-white px-10 py-8 text-black mx-5'>Decrement</button>
            </div>
        </>
    )
}

export default Frame
