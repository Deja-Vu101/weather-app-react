import HourlyForecastCards from "./HourlyForecastCards/HourlyForecastCards";
import s from "../HourlyForecast/hourlyForecast.module.scss";
import { useState } from "react";
import ThisDayHourly from "./ThisDayHourly/ThisDayHourly";
import HourlyHeader from "./HourlyHeader";
import { usePopup } from "../../context/PopupContext";

const HourlyForecast = () => {
  const { data } = usePopup();
  const today = new Date().getDate();
  const [apiDate, setApiDate] = useState(data?.apiDate || "");

  const [timeDay, setTimeDay] = useState(
    today == data?.date ? apiDate.slice(10, 16) : " 15:00"
  );

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
