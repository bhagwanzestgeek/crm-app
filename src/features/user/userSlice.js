import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  name : 'Zestgeek'
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setUser : (state, action) => {
        console.log('test..........');
    }
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
