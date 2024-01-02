import React, { useState } from "react";
import s from "./Cards.module.scss";
import CardsItemDay from "./CardsItemDay";
import { IForecast } from "../../types/forecast8Days";
import Slider from "react-slick";
import "../../Test/test.scss";
import { daysOfWeek, months } from "../../services/infoAboutDaysMonths";
import UpdatePlan from "../UpdatePlan/UpdatePlan";
import CardsItemToday from "./CardsItemToday";
import { todayDate } from "../../services";
import { useTypedSelector } from "../../hooks";

interface ICardsWeek {
  forecast: IForecast;
  filterButton: string;
}

const CardsWeek: React.FC<ICardsWeek> = ({ forecast, filterButton }) => {
  const { yearNow, monthNow } = useTypedSelector(
    (state) => state.currentWeatherSlice.todayState
  );
  const dateString = todayDate();
  var dayNow = new Date().getDate();
  dayNow++;

  const [isSwiping, setIsSwiping] = useState(false);
  const handleSwipeStart = () => {
    setIsSwiping(true);
  };
  
  const handleSwipeEnd = () => {
    setIsSwiping(false);
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
    onSwipe: handleSwipeStart,
    afterChange: handleSwipeEnd,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          arrows: false,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className={s.CardsWeek}>
      <div className={s.CardsWeek_wrapper}>
        <div className={s.CardsWeek_wrapper_container}>
          <div className="Slider">
            <Slider {...sliderSettings}>
              <CardsItemToday
                daysOfWeek={daysOfWeek}
                dateString={dateString}
                months={months}
                isSwiping = {isSwiping}
              />
              {forecast.list?.map((f) => {
                if (
                  f.dt_txt ===
                  `${yearNow}-${monthNow}-${
                    dayNow < 10 ? "0" + dayNow : dayNow
                  } 15:00:00`
                ) {
                  dayNow++;
                  return (
                    <CardsItemDay
                      key={f.dt}
                      obj={f}
                      daysOfWeek={daysOfWeek}
                      dateString={f.dt_txt}
                      months={months}
                      forecastImg={f.weather[0].description}
                      isSwiping = {isSwiping}
                    />
                  );
                }
                return null;
              })}
            </Slider>
          </div>
        </div>
        {filterButton !== "for5" && <UpdatePlan />}
      </div>
    </div>
  );
};

export default CardsWeek;
