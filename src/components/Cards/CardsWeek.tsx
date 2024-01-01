//import React from "react";
//import s from "./Cards.module.scss";
//import CardsItemDay from "./CardsItemDay";
//import { IForecast } from "../../types/forecast8Days";
//import Slider from "react-slick";
//import "../../Test/test.scss";
//import { daysOfWeek, months } from "../../services/infoAboutDaysMonths";
//import UpdatePlan from "../UpdatePlan/UpdatePlan";
//import CardsItemToday from "./CardsItemToday";
//import { todayDate } from "../../services";
//import { useTypedSelector } from "../../hooks";
//import { log } from "console";

//interface ICardsWeek {
//  forecast: IForecast;
//  filterButton: string;
//}

//const CardsWeek: React.FC<ICardsWeek> = ({ forecast, filterButton }) => {
//  const dateString = todayDate();
//  const { dayNow, monthNow, yearNow } = useTypedSelector(
//    (state) => state.currentWeatherSlice.todayState
//  );
//  //console.log(yearNow, "year", monthNow, "month", dayNow, "dayNow");
//  console.log(`${yearNow}-${monthNow}-${dayNow} 15:00:00`);
//  var day = Number(dayNow) + 1;

//  const sliderSettings = {
//    dots: false,
//    infinite: false,
//    speed: 500,
//    slidesToShow: 5,
//    slidesToScroll: 2,
//    arrows: false,
//    responsive: [
//      {
//        breakpoint: 1000,
//        settings: {
//          slidesToShow: 4,
//          slidesToScroll: 2,
//          infinite: true,
//          dots: false,
//          arrows: false,
//        },
//      },
//      {
//        breakpoint: 800,
//        settings: {
//          slidesToShow: 3,
//          slidesToScroll: 2,
//          infinite: true,
//          dots: false,
//        },
//      },
//      {
//        breakpoint: 600,
//        settings: {
//          slidesToShow: 2,
//          slidesToScroll: 2,
//          dots: false,
//          infinite: true,
//        },
//      },
//      {
//        breakpoint: 480,
//        settings: {
//          slidesToShow: 2,
//          slidesToScroll: 2,
//          dots: false,
//          arrows: false,
//          infinite: true,
//        },
//      },
//    ],
//  };

//  return (
//    <div className={s.CardsWeek}>
//      <div className={s.CardsWeek_wrapper}>
//        <div className={s.CardsWeek_wrapper_container}>
//          <div className="Slider">
//            <Slider {...sliderSettings}>
//              <CardsItemToday
//                daysOfWeek={daysOfWeek}
//                dateString={dateString}
//                months={months}
//              />
//              {forecast.list?.map((f) => {
                
//                if (f.dt_txt === `${yearNow}-${monthNow}-${day} 15:00:00`) {
//                  day++;

//                  return (
//                    <CardsItemDay
//                      key={f.dt}
//                      obj={f}
//                      daysOfWeek={daysOfWeek}
//                      dateString={f.dt_txt}
//                      months={months}
//                      forecastImg={f.weather[0].description}
//                    />
//                  );
//                }
//                return null;
//              })}
//            </Slider>
//          </div>
//          {filterButton !== "for5" && <UpdatePlan />}
//        </div>
//      </div>
//    </div>
//  );
//};

//export default CardsWeek;
import React from "react";
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
  const {yearNow, monthNow} = useTypedSelector( state => state.currentWeatherSlice.todayState)
  const dateString = todayDate();
  var dayNow = new Date().getDate();
  //var monthNow = new Date().getMonth();
  dayNow++;
  //monthNow++;

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
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
                    />
                  );
                }
                return null;
              })}
            </Slider>
          </div>
          {filterButton !== "for5" && <UpdatePlan />}
        </div>
      </div>
    </div>
  );
};

export default CardsWeek;