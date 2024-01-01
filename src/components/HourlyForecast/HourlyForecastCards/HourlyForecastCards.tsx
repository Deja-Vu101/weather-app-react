import React from "react";
import { GlobalSvgSelector } from "../../../assets/img/icons/GlobalSvgSelector";
import { useTypedSelector } from "../../../hooks";
import { usePopup } from "../../../context/PopupContext";
import s from "../HourlyForecastCards/hourlyCards.module.scss";

interface HourlyForecastCardsProps {
  changeCard: (time: string) => void;
  timeDay: string;
}

const HourlyForecastCards: React.FC<HourlyForecastCardsProps> = ({
  changeCard,
  timeDay,
}) => {
  const { list } = useTypedSelector((state) => state.forecast8Days.forecast);
  const { yearNow, monthNow } = useTypedSelector(
    (state) => state.currentWeatherSlice.todayState
  );
  const { data } = usePopup();

  const formattedDate = data?.date
    ? `${yearNow}-${monthNow}-${data.date < 10 ? "0" + data.date : data.date}`
    : null;

  return (
    <div className={s.HourlyCards}>
      <div className={s.HourlyCards_Wrapper}>
        {list.map((day) => {
          if (data && data.date) {
            const dayDate = day.dt_txt.slice(0, 10);
            const time = day.dt_txt.slice(10, 16);
            const isActive = time === timeDay;
            const isDateMatch = dayDate === formattedDate;

            if (isDateMatch) {
              return (
                <div
                  key={day.dt_txt}
                  className={
                    isActive
                      ? `${s.HourlyCards_Item} ${s.hourly_active}`
                      : s.HourlyCards_Item
                  }
                  onClick={() => changeCard(day.dt_txt)}
                >
                  <div className={s.Item_Time}>{time}</div>

                  <div className={s.HourlyCards_Image}>
                    <GlobalSvgSelector id={day.weather[0].description} />
                  </div>
                  <div className={s.HourlyCards_Temperature}>
                    {Math.round(day.main.temp)}
                  </div>
                  <div className={s.HourlyCards_Description}>
                    {day.weather[0].description}
                  </div>
                </div>
              );
            }
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default HourlyForecastCards;
