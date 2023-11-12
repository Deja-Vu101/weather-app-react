import React from "react";
import { GlobalSvgSelector } from "../../assets/img/icons/GlobalSvgSelector";
import { IRootWeather } from "../../types";
import s from "./ThisDay.module.scss";
import { formateDate } from "../../services";

interface ThisDayProps {
  weather: IRootWeather;
  city: string;
}

const ThisDay: React.FC<ThisDayProps> = ({ weather, city }) => {
  const temperature = Math.round(weather.main.temp);
  const description = weather.weather[0].description;
  const formattedDate = formateDate(weather.dt);

  return (
    <div className={s.ThisDay}>
      <div className={s.ThisDay_content}>
        <div className={s.ThisDay_content_top}>
          <div className={s.content_top}>
            <div className={s.content_top_temperature}>{temperature}°</div>
            <div className={s.content_top_day}>Today</div>
          </div>
          <div className={s.thisDay_img}>
            <GlobalSvgSelector id={description} />
          </div>
        </div>
        <div className={s.ThisDay_content_bottom}>
          <div className={s.content_bottom_time}>Time: {formattedDate}</div>
          <div className={s.content_bottom_city}>City: {city}</div>
        </div>
      </div>
    </div>
  );
};

export default ThisDay;
