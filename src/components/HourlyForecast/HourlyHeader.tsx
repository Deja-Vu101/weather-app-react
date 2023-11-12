import s from "../HourlyForecast/hourlyForecast.module.scss";
import { usePopup } from "../../context/PopupContext";
import { useTypedSelector } from "../../hooks";

interface IOwnProps {
  timeDay: string;
}

const HourlyHeader: React.FC<IOwnProps> = ({ timeDay }) => {
  const { data } = usePopup();

  return (
    <>
      <h2 className={s.HourlyForecast_Title}>
        Hourly Forecast{" "}
        <span className={s.HourlyForecast_Date}>
          {data?.date} {data?.day}
          {" " + timeDay}
        </span>
      </h2>
      <hr className={s.HourlyForecast_Line} />
    </>
  );
};

export default HourlyHeader;
