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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          display: 'none'
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    
  };
  return (
    <div className={s.CardsWeek}>
      <div className={s.CardsWeek_wrapper}>
        <div className={s.CardsWeek_wrapper_conteiner}>
          <div className='Slider'>
            <Slider {...settings}>
              <CardsItemToday
                daysOfWeek={daysOfWeek}
                dateString={dateString}
                months={months}
              />
              {forecast.list?.map((f) => {
                if (f.dt_txt === `2023-07-${dayNow} 12:00:00`) {
                  dayNow++;
                  return (
                    <CardsItemDay
                      key={f.dt}
                      obj={f}
                      daysOfWeek={daysOfWeek}
                      dateString={f.dt_txt}
                      months={months}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsWeek;
