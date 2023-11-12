import React, { useState } from "react";
import { useTypedDispatch } from "../../hooks";
import { fetchWeather } from "../../thunks/fetchWeather";
import s from "./firstSearch.module.scss";
import button from "../UpdatePlan/updatePlan.module.scss";
import MainLoader from "../Loaders/MainLoader";

interface FisrtSearchCityProps {
  error: any;
  isLoading: boolean;
}

const FisrtSearchCity: React.FC<FisrtSearchCityProps> = ({
  error,
  isLoading,
}) => {
  const dispatch = useTypedDispatch();
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const clickButtonSearch = () => {
    dispatch(fetchWeather(searchValue));
  };

  return (
    <div className={s.FisrtSearchCity}>
      <div className={s.container}>
        <div className={s.firstSearch_wrapper}>
          {isLoading ? (
            <div className={s.Loader}>
              <MainLoader />
            </div>
          ) : (
            <>
              <div className={s.FisrtSearchCity_message}>
                {error.message ?? error.message}
              </div>

              <div className={s.firstSearch_title}>Search any city</div>
              <div className={s.firstSearch_input}>
                <input
                  type="text"
                  value={searchValue}
                  onChange={onChangeSearch}
                />
              </div>
              <div className={button.Button} onClick={clickButtonSearch}>
                Search it
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FisrtSearchCity;
