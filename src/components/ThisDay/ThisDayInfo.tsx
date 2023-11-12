import s from "./ThisDay.module.scss";
import cloud from "../../assets/img/Cloud.svg";
import { checkPressure, getWindDirection } from "../../services";
import { IRootWeather } from "../../types";
import ThisDayItem from "./ThisDayItem";

interface ThisDayInfoProps {
  weather: IRootWeather;
}

const ThisDayInfo: React.FC<ThisDayInfoProps> = ({ weather }) => {
  const temperature = Math.round(weather.main.temp);
  const feelsLike = Math.round(weather.main.feels_like);
  const pressure = weather.main.pressure;
  const humidity = weather.main.humidity;
  const windSpeed = weather.wind.speed;
  const windDirection = getWindDirection(weather.wind.deg);

  return (
    <div className={s.ThisDayInfo}>
      <div className={s.ThisDayInfo_content}>
        <div className={s.infoItems}>
          <ThisDayItem
            iconId="temp"
            title="Temperature"
            description={`${temperature}° feels like ${feelsLike}°`}
          />

          <ThisDayItem
            iconId="pressure"
            title="Pressure"
            description={`${pressure} hPa - ${checkPressure(pressure)}`}
          />

          <ThisDayItem
            iconId="precipitation"
            title="Humidity"
            description={`${humidity}%`}
          />

          <ThisDayItem
            iconId="wind"
            title="Wind"
            description={`${windSpeed} m/s ${windDirection}`}
          />
        </div>

        <div className={s.backgroundImage}>
          <img src={cloud} alt="Cloud" />
        </div>
      </div>
    </div>
  );
};

export default ThisDayInfo;
