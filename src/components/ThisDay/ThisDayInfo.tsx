import { GlobalSvgSelector } from "../../assets/img/icons/GlobalSvgSelector";
import s from "./ThisDay.module.scss";
import cloud from "../../assets/img/Cloud.svg";
import { IRootWeather } from "../../types";
import { checkPressure, getWindDirection } from "../../services";

interface ThisDayInfoProps{
  weather: IRootWeather;
}

const ThisDayInfo: React.FC<ThisDayInfoProps> = ({weather}) => {
  return (
    <div className={s.ThisDayInfo}>
      <div className={s.ThisDayInfo_content}>
        <div className={s.infoItems}>
          <div className={s.infoItem}>
            <div className={s.infoItem_leftContent}>
              <div className={s.infoItem_img}>
                <GlobalSvgSelector id="temp" />
              </div>
              <div className={s.infoItem_title}>Temperature</div>
            </div>

            <div className={s.infoItem_RightContent}>
              <div className={s.infoItem_description}>
                {Math.round(weather.main.temp)}° feels like {Math.round(weather.main.feels_like)}°
                </div>
            </div>
          </div>

          <div className={s.infoItem}>
            <div className={s.infoItem_leftContent}>
              <div className={s.infoItem_img}>
                <GlobalSvgSelector id="pressure" />
              </div>
              <div className={s.infoItem_title}>Precipitation</div>
            </div>
            <div className={s.infoItem_RightContent}>
              <div className={s.infoItem_description}>{`${weather.main.pressure} hPa - ${checkPressure(weather.main.pressure)}`}</div>
            </div>
          </div>

          <div className={s.infoItem}>
            <div className={s.infoItem_leftContent}>
              <div className={s.infoItem_img}>
                <GlobalSvgSelector id="precipitation" />
              </div>
              <div className={s.infoItem_title}>Humidity</div>
            </div>
            <div className={s.infoItem_RightContent}>
              <div className={s.infoItem_description}>{weather.main.humidity}%</div>
            </div>
          </div>

          <div className={s.infoItem}>
            <div className={s.infoItem_leftContent}>
              <div className={s.infoItem_img}>
                <GlobalSvgSelector id="wind" />
              </div>
              <div className={s.infoItem_title}>Wind</div>
            </div>
            <div className={s.infoItem_RightContent}>
              <div className={s.infoItem_description}>
                {`${weather.wind.speed} m/s ${getWindDirection(weather.wind.deg)}`}  
              </div>
            </div>
          </div>
        </div>

        <div className={s.backgroundImage}>
          <img src={cloud} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ThisDayInfo;
