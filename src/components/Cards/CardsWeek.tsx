import React, { useEffect } from "react";
import { Day } from "../../types";
import s from "./Cards.module.scss";
import CardsItemDay from "./CardsItemDay";
import { IForecast } from "../../types/forecast8Days";
import { todayDate } from "../../services";
import CardsItemToday from "./CardsItemToday";
import Slider from "react-slick";
import "../../Test/test.scss";

interface ICardsWeek {
  forecast: IForecast;
}

const CardsWeek: React.FC<ICardsWeek> = ({ forecast }) => {
  const daysOfWeek: { [key: number]: string } = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };
  const months: { [key: number]: string } = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  const dateString = todayDate();

  var dayNow = new Date().getDate();

  dayNow++;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
          display: "none",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots:true
          },
        },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className={s.CardsWeek}>
      <div className={s.CardsWeek_wrapper}>
        <div className={s.CardsWeek_wrapper_container}>
          <div className="Slider">
            <Slider {...settings}>
              <CardsItemToday
                daysOfWeek={daysOfWeek}
                dateString={dateString}
                months={months}
              />
              {forecast.list?.map((f) => {
                if (
                  f.dt_txt ===
                  `2023-10-${dayNow < 10 ? "0" + dayNow : dayNow} 15:00:00`
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
                    />
                  );
                }
                return null;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsWeek;
