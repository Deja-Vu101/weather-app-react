import { createSlice } from "@reduxjs/toolkit";
import { IForecast } from "../../types/forecast8Days";

interface IResponseForecast {
  forecast: IForecast;
  isLoading: boolean,
  error: null | string,
}

const initialState: IResponseForecast = {
  forecast: {} as IForecast,
  isLoading: false,
  error: null,
};

export const forecast8Days = createSlice({
  name: "forecast8Days",
  initialState,
  reducers: {
    fetchForecast(state) {
      state.isLoading = true;
    },
    fetchForecastSuccess(state, action) {
      state.isLoading = false;
      state.forecast = action.payload.data;
    },
    fetchForecastError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default forecast8Days.reducer;
