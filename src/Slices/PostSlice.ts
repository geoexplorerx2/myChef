import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const Posts: any = createAsyncThunk('posts/fetch', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
})
const PostSlice = createSlice({
    name: "PostSlice",
    initialState: { PostList: [], FetchingPost: false, ErrorMessage: '' },
    extraReducers: {
        [Posts.fulfilled]: (state, action) => {
            /** we returned data from Posts and action.payload is data */
            state.PostList = action.payload;
            state.FetchingPost = false;

        },
        [Posts.pending]: (state) => {
            state.FetchingPost = true;
        },
        [Posts.rejected]: (state) => {
            state.FetchingPost = false;
            state.ErrorMessage = 'Something Went Wrong';
        }
    },
    reducers: {}
})

export default PostSlice.reducer;