import React from "react";
import s from "./firstSearch.module.scss";

interface SearchAnyCityProps{
	serchValue: string
	onChangeSearch: (e: string) => void
	clickButtonSearch: () => void
}

const SearchAnyCity: React.FC<SearchAnyCityProps> = ({serchValue, onChangeSearch, clickButtonSearch}) => {
  return (
    <>
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
    </>
  );
};

export default SearchAnyCity;
