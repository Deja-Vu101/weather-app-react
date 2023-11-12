import React from "react";
import { GlobalSvgSelector } from "../../assets/img/icons/GlobalSvgSelector";
import s from "./Popup.module.scss";
import { usePopup } from "../../context/PopupContext";
import HourlyForecast from "../HourlyForecast/HourlyForecast";

const Popup = () => {
  const { popupHidden, closePopup } = usePopup();

  const handlePopupBlurClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if ((event.target as HTMLElement).classList.contains(s.PopupBlur)) {
      closePopup();
    }
  };

  return (
    <>
      {!popupHidden && (
        <>
          <div className={s.PopupBlur} onClick={handlePopupBlurClick}></div>

          <div className={s.Popup}>
            <HourlyForecast />

            <div className={s.Popup_closeIcon} onClick={closePopup}>
              <GlobalSvgSelector id="closeIcon" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Popup;
