import React from "react";
import s from "../Cards/Cards.module.scss";
import { useTypedSelector } from "../../hooks";
import { GlobalSvgSelector } from "../../assets/img/icons/GlobalSvgSelector";
import { usePopup } from "../../context/PopupContext";

interface CardsItemTodayProps {
  daysOfWeek: any;
  dateString: string;
  months: { [key: number]: string };
  isSwiping: boolean;
}

const CardsItemToday: React.FC<CardsItemTodayProps> = ({
  daysOfWeek,
  dateString,
  months,
  isSwiping,
}) => {
  const { weather } = useTypedSelector((state) => state.currentWeatherSlice);
  const { list } = useTypedSelector((state) => state.forecast8Days.forecast);

  const date = new Date(dateString);
  const month = date.getMonth();
  const temperatureMax = Math.round(weather.main?.temp_max);
  const temperatureMin = Math.round(weather.main?.temp_min);
  const weatherDescription = weather.weather[0].description;

  const day = date.getDay();

  const { openPopup } = usePopup();

  let arrTime: string[] = [];
  const handleCardClick = () => {
    list.forEach((i) => {
      if (dateString.slice(0, 10) === i.dt_txt.slice(0, 10)) {
        arrTime.push(i.dt_txt.slice(10, 13).trim());
      }
    });

    const popupData = {
      date: date.getDate(),
      day: daysOfWeek[day],
      month: months[month],
      apiDate:
        dateString.slice(0, 10) +
        (arrTime.includes("15") ? " 15:00:00" : ` ${arrTime[0]}:00:00`),
    };

    if (!isSwiping) {
      openPopup(popupData);
    }
  };

  return (
    <div className={s.CardsItemDay} onClick={handleCardClick}>
      <div className={s.CardsItemDay_content}>
        <div className={s.CardsItemDay_day}>Today</div>
        <div className={s.CardsItemDay_day_info}>
          {date.getDate()} {months[month]}
        </div>
        <div className={s.CardsItemDay_img}>
          <GlobalSvgSelector id={weatherDescription} />
        </div>
        <div className={s.CardsItemDay_temp_day}>{temperatureMax}</div>
        <div className={s.CardsItemDay_temp_night}>{temperatureMin}</div>
        <div className={s.CardsItemDay_description}>{weatherDescription}</div>
      </div>
    </div>
  );
};

export default CardsItemToday;
