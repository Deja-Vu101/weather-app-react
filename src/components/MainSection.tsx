import React from "react";
import s from "./MainSection.module.scss";
import ThisDay from "./ThisDay/ThisDay";
import ThisDayInfo from "./ThisDay/ThisDayInfo";
import Cards from "./Cards/Cards";
import { useTypedSelector } from "../hooks";
import MainLoader from "./Loaders/MainLoader";

const MainSection: React.FC = () => {
  const { weather, isLoading } = useTypedSelector(
    (state) => state.currentWeatherSlice
  );

  const isDataAvailable = !isLoading && Object.keys(weather).length > 0;

  return (
    <section className={s.MainSection}>
      <div className={s.MainSection_container}>
        <div className={s.MainSection_wrapper}>
          {!isDataAvailable ? (
            <div className={s.Loader}>
              <MainLoader />
            </div>
          ) : (
            <>
              <ThisDay weather={weather} city={weather.name} />
              <ThisDayInfo weather={weather} />
            </>
          )}
        </div>
        {!isDataAvailable ? null : <Cards name={weather.name} />}
      </div>
    </section>
  );
};

export default MainSection;
