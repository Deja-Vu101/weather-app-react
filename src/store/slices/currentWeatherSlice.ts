import { IError, IRootWeather } from "./../../types/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";

export interface ICurrentWeather {
  weather: IRootWeather;
  isLoading: boolean;
  error: IError
  filterBtn: string
}

const initialState: ICurrentWeather = {
  weather: {} as IRootWeather,
  isLoading: false,
  error: {} as IError,
  filterBtn: 'for5days'
};

export const currentWeatherSlice = createSlice({
  name: "CurrentWeather",
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(
      state,
      action: PayloadAction<AxiosResponse<IRootWeather>>
    ) {
      state.isLoading = false;
      state.weather = action.payload.data;
      
    },
    fetchCurrentWeatherError(
      state,
      action: PayloadAction<AxiosError<IError>>
    ) {
      state.isLoading = false;
      state.error = {
        cod: action.payload.code,
        message: action.payload.message
      }
      
    },
    //changeFilterButton(state, action){
    //  state.filterBtn = action.payload
    //}
  },
});

export default currentWeatherSlice.reducer;
