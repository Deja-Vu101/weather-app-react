import { useTypedSelector } from "../../../hooks";
import ThisDayItems from "./ThisDayItems";
import s from "../hourlyForecast.module.scss";

interface IOwnProps {
  apiDate: string;
  timeDay: string;
}

const ThisDayHourly: React.FC<IOwnProps> = ({ apiDate, timeDay }) => {
  const { list } = useTypedSelector((state) => state.forecast8Days.forecast);

  apiDate = apiDate.slice(11, 16) !== "15:00" ? list[0].dt_txt : apiDate;

  return (
    <div className={s.ThisDayHourly}>
      {list.map(
        (f) =>
          f.dt_txt === apiDate && (
            <ThisDayItems
              key={f.dt}
              humidity={f.main.humidity}
              pressure={f.main.pressure}
              temp={f.main.temp}
              tempFeels={f.main.feels_like}
              windDeg={f.wind.deg}
              windSpeed={f.wind.speed}
            />
          )
      )}
    </div>
  );
};

export default ThisDayHourly;
