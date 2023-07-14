import React from "react";
import s from "../Cards/Cards.module.scss";
import { useTypedSelector } from "../../hooks";
import { GlobalSvgSelector } from "../../assets/img/icons/GlobalSvgSelector";

interface CardsItemTodayProps {
  daysOfWeek: {};
  dateString: string;
  months: { [key: number]: string };
}

const CardsItemToday: React.FC<CardsItemTodayProps> = ({
  daysOfWeek,
  dateString,
  months,
}) => {
  const { weather } = useTypedSelector((state) => state.currentWeatherSlice);

  const date = new Date(dateString);
  const month = date.getMonth();

  return (
    <div className={s.CardsItemDay}>
      <div className={s.CardsItemDay_content}>
        <div className={s.CardsItemDay_day}>Today</div>
        <div className={s.CardsItemDay_day_info}>
          {date.getDate()} {months[month]}
        </div>
        <div className={s.CardsItemDay_img}>
          <GlobalSvgSelector id={weather.weather[0].description} />
        </div>
        <div className={s.CardsItemDay_temp_day}>
          {Math.round(weather.main?.temp_max)}
        </div>
        <div className={s.CardsItemDay_temp_night}>
          {Math.round(weather.main?.temp_min)}
        </div>
        <div className={s.CardsItemDay_description}>
          {weather.weather[0].description}
        </div>
      </div>
    </div>
  );
};

export default CardsItemToday;
