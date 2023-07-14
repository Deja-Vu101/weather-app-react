import ThisDay from "./ThisDay/ThisDay";
import ThisDayInfo from "./ThisDay/ThisDayInfo";
import s from "./MainSection.module.scss";
import Cards from "./Cards/Cards";
import { useTypedSelector } from "../hooks";

const MainSection = () => {
  const { weather, error, isLoading } = useTypedSelector(
    (state) => state.currentWeatherSlice
  );

  return (
    <section className={s.MainSection}>
      <div className={s.container}>
        <div className={s.MainSection_wrapper}>
          {isLoading || Object.keys(weather).length === 0 ? (
            <h2>Loading...</h2>
          ) : (
            <>
              <ThisDay weather={weather} city={weather.name} />
              <ThisDayInfo weather={weather} />
            </>
          )}
        </div>
        <Cards name={weather.name} />
      </div>
    </section>
  );
};

export default MainSection;
