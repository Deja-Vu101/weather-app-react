import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import currentWeatherSlice from "./slices/currentWeatherSlice";
import forecast8Days from './slices/forecast8DaysSlice';

export const apiKey = "50f4aabc3300783a63bac96ec4d92341";

const rootReducer = combineReducers({
	currentWeatherSlice,
	forecast8Days
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false
	})
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
