import React, { useState } from "react";
import { useTypedDispatch } from "../../hooks";
import { fetchWeather } from "../../thunks/fetchWeather";
import s from "./firstSearch.module.scss";

interface FisrtSearchCityProps {
  error: any;
}

const FisrtSearchCity: React.FC<FisrtSearchCityProps> = ({ error }) => {
  const dispatch = useTypedDispatch();
  const [serchValue, setSearchValue] = useState("");

  const onChangeSearch = (e: string) => {
    setSearchValue(e);
  };

  const clickButtonSearch = () => {
    dispatch(fetchWeather(serchValue));
  };

  return (
    <div className={s.FisrtSearchCity}>
      <div className={s.container}>
        <div className={s.firstSearch_wrapper}>
          <div className={s.FisrtSearchCity_message}></div>
          <div className={s.firstSearch_title}>Search any city</div>
          <div className={s.firstSearch_input}>
            <input
              type="text"
              value={serchValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChangeSearch(e.target.value)
              }
            />
          </div>
          <div className={s.searchButton} onClick={clickButtonSearch}>
            Do it
          </div>
        </div>
      </div>
    </div>
  );
};

export default FisrtSearchCity;
