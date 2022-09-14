import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../../assests/Api/Api'

const api = new API();

export const getTrips = createAsyncThunk(
    'trips',
    async () => {
        let response = {};
        await api.getTrips().then(res => response = res.data).catch(error => console.log(error))
        return response;
    }
)

export const addActivity = createAsyncThunk(
    'trips',
    async (slug, { dispatch }) => {
        let response = {};
        await api.addActivity(slug).then(res => response = res.data).catch(error => console.log(error))
        dispatch(getTrips())
        return response;
    }
)

export const removeActivity = createAsyncThunk(
    'trips',
    async (slug, { dispatch }) => {
        let response = {};
        await api.removeActivity(slug).then(res => response = res.data).catch(error => console.log(error))
        dispatch(getTrips())
        return response;
    }
)

const initialState = {
    tripsData: null,
};

const tripsSlice = createSlice({
    name: 'trips',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getTrips.fulfilled, (state, action) => {
            state.tripsData = action.payload;
        })
    },
});

export default tripsSlice.reducer;