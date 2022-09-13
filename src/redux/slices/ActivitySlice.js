import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../../assests/Api/Api'

const api = new API();

export const getActivity = createAsyncThunk(
    'activity',
    async (slug) => {
        let response = {};
        await api.getActivity(slug).then(res => response = res.data).catch(error => console.log(error))

        return response;
    }
)

const initialState = {
    activityData: null,
};

const activitySlice = createSlice({
    name: 'activity',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getActivity.fulfilled, (state, action) => {
            state.activityData = action.payload;
        })
    },
});

export default activitySlice.reducer;