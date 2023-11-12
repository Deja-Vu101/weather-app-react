import React from "react";
import s from "./Cards.module.scss";
import { GlobalSvgSelector } from "../../assets/img/icons/GlobalSvgSelector";
import { List } from "../../types/forecast8Days";
import { usePopup } from "../../context/PopupContext";
import { dayNow } from "../../services/infoAboutDaysMonths";

interface CardsItemDayProps {
  obj: List;
  daysOfWeek: { [key: number]: string };
  months: { [key: number]: string };
  dateString: string;
  forecastImg: string;
}

const CardsItemDay: React.FC<CardsItemDayProps> = ({
  obj,
  daysOfWeek,
  months,
  dateString,
  forecastImg,
}) => {
  const date = new Date(dateString);
  const day = date.getDay();
  const month = date.getMonth();

  const { openPopup } = usePopup();

  const handleCardClick = () => {
    openPopup({
      date: date.getDate(),
      day: daysOfWeek[day],
      month: months[month],
      apiDate: obj.dt_txt,
    });
  };

  const formattedTemperatureMax = Math.round(obj.main.temp_max);
  const formattedTemperatureMin = Math.round(obj.main.temp_min);

  const isToday = date.getDate() === dayNow;
  return (
    <div className={s.CardsItemDay}>
      <div className={s.CardsItemDay_content} onClick={handleCardClick}>
        <div className={s.CardsItemDay_day}>
          {isToday ? "Today" : daysOfWeek[day]}
        </div>
        <div className={s.CardsItemDay_day_info}>
          {date.getDate()} {months[month]}
        </div>
        <div className={s.CardsItemDay_img}>
          <GlobalSvgSelector id={forecastImg} />
        </div>
        <div className={s.CardsItemDay_temp_day}>{formattedTemperatureMax}</div>
        <div className={s.CardsItemDay_temp_night}>
          {formattedTemperatureMin}
        </div>
        <div className={s.CardsItemDay_description}>{forecastImg}</div>
      </div>
    </div>
  );
};

export default CardsItemDay;
