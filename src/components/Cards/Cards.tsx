import { useTypedDispatch, useTypedSelector } from "../../hooks";
import { fetchForecast8Days } from "../../thunks/fetchForecast8Days";
import ButtonDays from "./ButtonDays";
import s from "./Cards.module.scss";
import CardsWeek from "./CardsWeek";
import { useEffect } from "react";

interface CardsProps {
  name: string;
}

const Cards: React.FC<CardsProps> = ({ name }) => {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchForecast8Days(name));
  }, []);

  const { forecast, error, isLoading } = useTypedSelector(
    (state) => state.forecast8Days
  );

  return (
    <div className={s.Cards}>
      <div className={s.Cards_wrapper}>
        <div className={s.cardsButtons}>
          <ButtonDays />
        </div>

        {isLoading ? <h2>Loading...</h2> : <CardsWeek forecast={forecast} />}
      </div>
    </div>
  );
};

export default Cards;
