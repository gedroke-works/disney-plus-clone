import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
    movies: []
}

// Redux => Actions -> Reducers -> State
const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies:(state, action) => {
            state.movies = action.payload;
        }
    }
}) 

export const { setMovies } = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;