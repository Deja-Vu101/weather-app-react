import React, { useEffect, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../hooks";
import { fetchForecast8Days } from "../../thunks/fetchForecast8Days";
import ButtonDays from "./ButtonDays";
import CardsWeek from "./CardsWeek";
import s from "./Cards.module.scss";
import MainLoader from "../Loaders/MainLoader";

interface CardsProps {
  name: string;
}

const Cards: React.FC<CardsProps> = ({ name }) => {
  const dispatch = useTypedDispatch();
  const filterOptions = ["for5", "for16", "formonth"];
  const [filterButton, setFilterButton] = useState("for5");

  useEffect(() => {
    dispatch(fetchForecast8Days(name));
  }, [dispatch, name]);

  const { forecast, error, isLoading } = useTypedSelector(
    (state) => state.forecast8Days
  );

  return (
    <div className={s.Cards}>
      <div className={s.Cards_wrapper}>
        <div className={s.cardsButtons}>
          <ButtonDays
            filterOptions={filterOptions}
            filterButton={filterButton}
            setFilterButton={setFilterButton}
          />
        </div>

        {isLoading ? (
          <MainLoader />
        ) : (
          <CardsWeek forecast={forecast} filterButton={filterButton} />
        )}
      </div>
    </div>
  );
};

export default Cards;
