import { GlobalSvgSelector } from "../../../assets/img/icons/GlobalSvgSelector";
import { checkPressure, getWindDirection } from "../../../services";
import s from "../../HourlyForecast/hourlyForecast.module.scss";
import ThisDayItem from "../../ThisDay/ThisDayItem";

interface IOwnProps {
  temp: number;
  tempFeels: number;
  pressure: number;
  humidity: number;
  windSpeed: number;
  windDeg: number;
}

const ThisDayItems: React.FC<IOwnProps> = ({
  humidity,
  pressure,
  temp,
  tempFeels,
  windDeg,
  windSpeed,
}) => {
  return (
    <div className={s.infoItems}>
      <ThisDayItem
        description={`${Math.round(temp)}° feels like ${Math.round(
          tempFeels
        )}°`}
        iconId="temp"
        title="Temperature"
      />

      <ThisDayItem
        description={`${pressure} hPa - ${checkPressure(pressure)}`}
        iconId="pressure"
        title="Precipitation"
      />

      <ThisDayItem
        description={`${humidity}%`}
        iconId="precipitation"
        title="Humidity"
      />

      <ThisDayItem
        description={`${windSpeed} m/s ${getWindDirection(windDeg)}`}
        iconId="wind"
        title="Wind"
      />
    </div>
  );
};

export default ThisDayItems;
