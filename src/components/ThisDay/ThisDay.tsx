import { GlobalSvgSelector } from "../../assets/img/icons/GlobalSvgSelector";
import { IRootWeather } from "../../types";
import s from "./ThisDay.module.scss";
import { formateDate } from "../../services";

interface ThisDayProps {
  weather: IRootWeather;
  city: string;
}

const ThisDay: React.FC<ThisDayProps> = ({ weather, city }) => {
  return (
    <div className={s.ThisDay}>
      <div className={s.ThisDay_content}>
        <div className={s.ThisDay_content_top}>
          <div className={s.content_top}>
            <div className={s.content_top_temperature}>
              {Math.round(weather.main.temp)}°
            </div>
            <div className={s.content_top_day}>Today</div>
          </div>
          <div className={s.thisDay_img}>
            <GlobalSvgSelector id={weather.weather[0].description} />
          </div>
        </div>
        <div className={s.ThisDay_content_bottom}>
          <div className={s.content_bottom_time}>
            Time: {formateDate(weather.dt)}
          </div>
          <div className={s.content_bottom_city}>City: {city}</div>
        </div>
      </div>
    </div>
  );
};

export default ThisDay;
