import { GlobalSvgSelector } from "../../assets/img/icons/GlobalSvgSelector";
import ThisDayItem from "../ThisDay/ThisDayItem";
import s from "./Popup.module.scss";

const Popup = () => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];
  return (
    <>
      <div className={s.PopupBlur}></div>
      <div className={s.Popup}>
        <div className={s.Popup_info}>
          <div className={s.Popup_info_temp}>12°</div>
          <div className={s.Popup_info_day}>Thursday</div>
          <div className={s.Popup_info_img}>
            <GlobalSvgSelector id="small_rain_sun" />
          </div>

          <div className={s.Popup_info_time}>Time: 01:54</div>
          <div className={s.Popup_info_city}>City: Kyiv</div>
        </div>
        <div className={s.PopupItemInfo}>
          {items.map((item) => (
            <ThisDayItem item={item} />
          ))}
          <div className={s.Popup_closeIcon}>
            <GlobalSvgSelector id="closeIcon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
