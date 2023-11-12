import React, { useEffect, useState } from "react";
import s from "./Header.module.scss";
import { useTheme } from "../../../hooks/useTheme";
import { Theme } from "../../../context/ThemeContext";
import {
  useDebounce,
  useTypedDispatch,
  useTypedSelector,
} from "../../../hooks";
import { fetchWeather } from "../../../thunks/fetchWeather";
import { GlobalSvgSelector } from "../../../assets/img/icons/GlobalSvgSelector";

const Header = () => {
  const { weather } = useTypedSelector((state) => state.currentWeatherSlice);
  const theme = useTheme();
  const dispatch = useTypedDispatch();

  const [currentValueCity, setCurrentValueCity] = useState("");
  const debounce = useDebounce(currentValueCity, 800);

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement;

    const components = [
      "body-background",
      "components-background",
      "card-background",
      "card-shadow",
      "text-color",
    ];

    components.forEach((component) => {
      root.style.setProperty(
        `--${component}-default`,
        `var(--${component}-${theme.theme})`
      );
    });
  }, [theme.theme]);

  useEffect(() => {
    if (currentValueCity.length !== 0) {
      dispatch(fetchWeather(currentValueCity));
    }
  }, [debounce]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValueCity(e.target.value);
  };

  const isWeatherDataAvailable = Object.keys(weather).length === 0;

  return (
    <header className={s.Header}>
      <div className={s.header_wrapper}>
        <div className={s.Header_Logo}>
          <div className={s.imgLogoHeader}>
            <a href="/">
              <GlobalSvgSelector id="header-logo" />
            </a>
          </div>
          <a href="/" className={s.logoText}>
            React weather
          </a>
        </div>

        <div className={s.Search_City}>
          <div className={s.changeTheme} onClick={changeTheme}>
            <GlobalSvgSelector id="change-theme" />
          </div>
          <div className={s.Search_City_Input}>
            <input
              style={
                isWeatherDataAvailable
                  ? { display: "none" }
                  : { display: "block" }
              }
              className={s.inputSearchCity}
              type="text"
              placeholder="Search a new city..."
              onChange={handleInputChange}
              value={currentValueCity}
            />
          </div>
        </div>
      </div>
      <div className={s.Header_MobileInput}>
        <input
          style={
            isWeatherDataAvailable ? { display: "none" } : { display: "block" }
          }
          className={s.inputSearchCity}
          type="text"
          placeholder="Search a new city..."
          onChange={handleInputChange}
          value={currentValueCity}
        />
      </div>
    </header>
  );
};

export default Header;
