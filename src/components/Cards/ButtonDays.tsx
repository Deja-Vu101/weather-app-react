import { useTypedDispatch } from "../../hooks";
import currentWeatherSlice from "../../store/slices/currentWeatherSlice";
import s from "./Cards.module.scss";

const FilterButtonDays = () => {
  const dispatch = useTypedDispatch();

  const onClickChangeFilter = (filterName: string) => {};

  return (
    <div className={s.FilterButtonDays}>
      <div className={s.ButtonDays_days}>
        <div className={s.ButtonDays_filterBtn + " " + s.active}>
          <span className={s.Word_For}>For</span> 5 days
        </div>
        <div className={s.ButtonDays_filterBtn}>
          <span className={s.Word_For}>For</span> 10 days
        </div>
        <div className={s.ButtonDays_filterBtn}>
          <span className={s.Word_For}>For</span> a month
        </div>
      </div>

      <div className={s.ButtonDays_cancel}>
        <div className={s.ButtonDays_filterBtn}>Cancel</div>
      </div>
    </div>
  );
};

export default FilterButtonDays;
