import { IError, IRootWeather } from "./../../types/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";

export interface ICurrentWeather {
  weather: IRootWeather;
  isLoading: boolean;
  error: IError;
  filterBtn: string;
  todayState: todayState;
}
interface todayState {
  monthNow: string;
  yearNow: string;
  dayNow: string;
}

const initialState: ICurrentWeather = {
  weather: {} as IRootWeather,
  isLoading: false,
  error: {} as IError,
  filterBtn: "for5days",
  todayState: {} as todayState,
};

export const currentWeatherSlice = createSlice({
  name: "CurrentWeather",
  initialState,
  reducers: {
    setTodayState(state, action: PayloadAction<todayState>) {
      var month = action.payload.monthNow;
      var year = action.payload.yearNow;
      var day = action.payload.dayNow;

      state.todayState.monthNow = month < "10" ? "0" + month : month;
      state.todayState.dayNow = day < "10" ? "0" + day : day;

      state.todayState.yearNow = year;
    },
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
    fetchCurrentWeatherError(state, action: PayloadAction<AxiosError<IError>>) {
      state.isLoading = false;
      state.error = {
        cod: action.payload.code,
        message: action.payload.message,
      };
    },
  },
});

export const { setTodayState } = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;
