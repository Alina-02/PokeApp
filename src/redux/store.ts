import { configureStore } from '@reduxjs/toolkit'
import pokemonListSlice from './slices/pokemonListSlice'

// dispatch() function is used to dispatch any actions to the store
// useSelector() is used for accessing any state properties


//accepts a reducer where we can pass all of the different reducers
export const store = configureStore({
  reducer: {
    pokemonList: pokemonListSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch