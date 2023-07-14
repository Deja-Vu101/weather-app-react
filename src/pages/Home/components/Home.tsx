import MainSection from "../../../components/MainSection";
import { useTypedSelector } from "../../../hooks";
import s from "../../../styles/Home.module.scss";

import FisrtSearchCity from "../../../components/firstSearch/FirstSearchCity";

const Home: React.FC = () => {
  const { weather, error, isLoading } = useTypedSelector(
    (state) => state.currentWeatherSlice
  );

  return (
    <div className={s.home}>
      {Object.keys(weather).length === 0 ? (
        <FisrtSearchCity error={error} isLoading={isLoading} />
      ) : (
        <MainSection />
      )}
    </div>
  );
};

export default Home;
