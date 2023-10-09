import { AxiosResponse } from "axios";
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

import axios from "axios";
import { AppDispatch } from "../store";
import { currentWeatherSlice } from "../store/slices/currentWeatherSlice";
import { IError, IRootWeather } from "../types";

export const apiKey = "50f4aabc3300783a63bac96ec4d92341";

export const fetchWeather = (city: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeather());
      let res = await axios.get<IRootWeather>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
    } catch (error: any) {
      console.log(error);
      dispatch(
        currentWeatherSlice.actions.fetchCurrentWeatherError(
          error.response.data
        )
      );
    }
  };
};
