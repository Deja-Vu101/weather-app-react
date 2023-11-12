import HourlyForecastCards from "./HourlyForecastCards/HourlyForecastCards";
import s from "../HourlyForecast/hourlyForecast.module.scss";
import { useState } from "react";
import ThisDayHourly from "./ThisDayHourly/ThisDayHourly";
import HourlyHeader from "./HourlyHeader";
import { usePopup } from "../../context/PopupContext";
import { useTypedSelector } from "../../hooks";

const HourlyForecast = () => {
  const { list } = useTypedSelector((state) => state.forecast8Days.forecast);
  const { data } = usePopup();
  const today = new Date().getDate();

  const [timeDay, setTimeDay] = useState(
    today == data?.date ? list[0].dt_txt.slice(11, 16) : "15:00"
  );
  const [apiDate, setApiDate] = useState(data?.apiDate || "");

  const changeCard = (time: string) => {
    setTimeDay(time.slice(10, 16));
    setApiDate(time);
  };

  return (
    <div className={s.HourlyForecast}>
      <HourlyHeader timeDay={timeDay} />
      <HourlyForecastCards changeCard={changeCard} timeDay={timeDay} />
      <ThisDayHourly apiDate={apiDate} timeDay={timeDay} />
    </div>
  );
};

export default HourlyForecast;
