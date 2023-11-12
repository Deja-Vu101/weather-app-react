import React, { useState } from "react";
import s from "./Cards.module.scss";

interface IOwnProps {
  filterOptions: string[];
  filterButton: string;
  setFilterButton: (filter: string) => void;
}

const FilterButtonDays: React.FC<IOwnProps> = ({
  filterButton,
  filterOptions,
  setFilterButton,
}) => {

  const onClickChangeFilter = (filterName: string) => {
    setFilterButton(filterName);
  };

  return (
    <div className={s.FilterButtonDays}>
      <div className={s.ButtonDays_days}>
        {filterOptions.map((option) => (
          <div
            key={option}
            className={
              filterButton === option
                ? `${s.ButtonDays_filterBtn} ${s.active}`
                : s.ButtonDays_filterBtn
            }
            onClick={() => onClickChangeFilter(option)}
          >
            <span className={s.Word_For}>For</span>{" "}
            {option === "formonth"
              ? "a month"
              : option.replace("for", "") + " days"}
          </div>
        ))}
      </div>

      <div
        className={s.ButtonDays_cancel}
        onClick={() => onClickChangeFilter("for5")}
      >
        <div className={s.ButtonDays_filterBtn}>Cancel</div>
      </div>
    </div>
  );
};

export default FilterButtonDays;
