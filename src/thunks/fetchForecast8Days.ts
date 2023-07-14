import axios from "axios"
import { AppDispatch, apiKey } from "../store"
import { forecast8Days } from "../store/slices/forecast8DaysSlice"

export const fetchForecast8Days = (city: string) => {
	return async(dispatch: AppDispatch) => {
		try {
			dispatch(forecast8Days.actions.fetchForecast)
			const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
			dispatch(forecast8Days.actions.fetchForecastSuccess(res))
		} catch (error) {
			console.log(error);
			
		}
	}
}