import { GlobalSvgSelector } from "../../assets/img/icons/GlobalSvgSelector";
import { Day } from "../../types";
import { List } from "../../types/forecast8Days";
import s from "./Cards.module.scss";

interface CardsItemDayProps {
  //day: Day;
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

  

  return (
    <div className={s.CardsItemDay}>
      <div className={s.CardsItemDay_content}>
        <div className={s.CardsItemDay_day}>{daysOfWeek[day]}</div>
        <div className={s.CardsItemDay_day_info}>
          {date.getDate()} {months[month]}
        </div>
        <div className={s.CardsItemDay_img}>
          <GlobalSvgSelector id={forecastImg} />
        </div>
        <div className={s.CardsItemDay_temp_day}>
          {Math.round(obj.main.temp_max)}
        </div>
        <div className={s.CardsItemDay_temp_night}>
          {Math.round(obj.main.temp_min)}
        </div>
        <div className={s.CardsItemDay_description}>{forecastImg}</div>
      </div>
    </div>
  );
};

export default CardsItemDay;
