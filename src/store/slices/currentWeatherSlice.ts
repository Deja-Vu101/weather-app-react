import { IError, IRootWeather } from "./../../types/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

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
      
      state.weather = action.payload.data;
      state.isLoading = false;
    },
    fetchCurrentWeatherError(
      state,
      action: PayloadAction<AxiosResponse<IError>>
    ) {
      state.isLoading = false;
      state.error.cod = action.payload.status;
      state.error.message = action.payload.statusText;
    },
    changeFilterButton(state, action){
      state.filterBtn = action.payload
    }
  },
});

export default currentWeatherSlice.reducer;
