import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../api/axiosConfig';


// Async thunk for fetching cards
export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
    const response = await axiosInstance.get('/cards');
    return response.data;
});

// Async thunk for searching cards
export const searchCards = createAsyncThunk('cards/searchCards', async (query, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get(`/search?title=${query}`);
        if (response.data.length === 0) {
            return rejectWithValue('Card not found');
        }
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error || 'An error occurred while searching');
    }
});

// Async thunk for creating a new card
export const createCard = createAsyncThunk('cards/createCard', async (newCard) => {
    const response = await axiosInstance.post('/cards', newCard);
    return response.data;
});
const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: [],
        searchResults: [],
        loading: false,
        error: null,
    },
    reducers: {
        resetSearchResults(state) {
            state.searchResults = [];
        },
    },
    extraReducers: (builder) => {
        builder
            // Handle fetching all cards
            .addCase(fetchCards.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCards.fulfilled, (state, action) => {
                state.loading = false;
                state.cards = action.payload || [];
            })
            .addCase(fetchCards.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // Handle searching cards
            .addCase(searchCards.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchCards.fulfilled, (state, action) => {
                state.loading = false;
                state.searchResults = action.payload;
            })
            .addCase(searchCards.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'An error occurred';
            })
            // Handle creating a new card
            .addCase(createCard.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createCard.fulfilled, (state, action) => {
                state.loading = false;
                state.cards.push(action.payload);
            })
            .addCase(createCard.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { resetSearchResults } = cardsSlice.actions;
export default cardsSlice.reducer;
