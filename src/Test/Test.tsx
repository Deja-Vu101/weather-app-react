//import "./test.scss";
import CardsItemToday from "../components/Cards/CardsItemToday";
import { todayDate } from "../services";
import { useTypedSelector } from "../hooks";
import CardsItemDay from "../components/Cards/CardsItemDay";
import Slider from "react-slick";

const Test = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

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

  const { forecast } = useTypedSelector((state) => state.forecast8Days);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="Slider">
      <div className="Slider_container">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className="item">
            <h3>1</h3>
          </div>
          <div className="item">
            <h3>2</h3>
          </div>
          <div className="item">
            <h3>3</h3>
          </div>
          <div className="item">
            <h3>4</h3>
          </div>
          <div className="item">
            <h3>5</h3>
          </div>
          <div className="item">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Test;
