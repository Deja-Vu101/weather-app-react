import { GlobalSvgSelector } from "../../../assets/img/icons/GlobalSvgSelector";
import s from "./Header.module.scss";
import { useEffect, useState } from "react";
import { useTheme } from "../../../hooks/useTheme";
import { Theme } from "../../../context/ThemeContext";
import {
  useDebounce,
  useTypedDispatch,
  useTypedSelector,
} from "../../../hooks";
import { fetchWeather } from "../../../thunks/fetchWeather";

const Header = () => {
  const { weather } = useTypedSelector((state) => state.currentWeatherSlice);
  const theme = useTheme();

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement;

    const comp = [
      "body-background",
      "components-background",
      "card-background",
      "card-shadow",
      "text-color",
    ];

    comp.forEach((comp) => {
      root.style.setProperty(
        `--${comp}-default`,
        `var(--${comp}-${theme.theme})`
      );
    });
  }, [theme.theme]);

  const [currentValueCity, setCurrentValueCity] = useState("");
  const debounce = useDebounce(currentValueCity, 800);

  const onChange = (e: string) => {
    setCurrentValueCity(e);
  };

  const dispatch = useTypedDispatch();

  useEffect(() => {
    if (currentValueCity.length !== 0) {
      dispatch(fetchWeather(currentValueCity));
    }
  }, [debounce]);

  return (
    <header className={s.Header}>
      <div className={s.header_wrapper}>
        <div className={s.imgLogoHeader}>
          <a href="/">
            <GlobalSvgSelector id="header-logo" />
          </a>
        </div>
        <a href="/" className={s.logoText}>
          React weather
        </a>
      </div>

      <div className={s.header_wrapper}>
        <div className={s.changeTheme} onClick={changeTheme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <input
          style={
            Object.keys(weather).length == 0
              ? { display: "none" }
              : { display: "block" }
          }
          className={s.inputSearchCity}
          type="text"
          placeholder="Search a new city..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
          value={currentValueCity}
        />
      </div>
    </header>
  );
};

export default Header;
