import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";

import axios from "axios";

const URL = "https://my-json-server.typicode.com/typicode/demo/posts";

const initialState = {
  list: [],
  loading: false,
  error: null
};

// create thunk
export const fetchPosts = createAsyncThunk("posts/get", async () => {
  try {
    return await axios.get(URL);
  } catch (err) {
    return err;
  }
});

export const addPost = createAsyncThunk("posts/post", async (payload) => {
  try {
    await axios.post(URL, payload);
  } catch (err) {
    return err;
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.list = action.payload.data;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state, action, error) => {
        console.log(action, error);
        state.error = error;
        state.loading = false;
      })
      .addCase(addPost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
      })
      .addCase(addPost.rejected, (state, action, error) => {
        state.error = error;
        state.loading = false;
      });
  }
});

export const allPostsSelector = (state) => state.posts.list;
export const postLoading = (state) => state.posts.loading;

export default postsSlice.reducer;
