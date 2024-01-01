import s from "../HourlyForecast/hourlyForecast.module.scss";
import { usePopup } from "../../context/PopupContext";

interface IOwnProps {
  timeDay: string;
}

const HourlyHeader: React.FC<IOwnProps> = ({ timeDay }) => {
  const { data } = usePopup();

  return (
    <div className={s.HourlyHeader}>
      <h2 className={s.HourlyForecast_Title}>
        Hourly Forecast{" "}
        <span className={s.HourlyForecast_Date}>
          {data?.date} {data?.day}
          {" " + timeDay}
        </span>
      </h2>
      <hr className={s.HourlyForecast_Line} />
    </div>
  );
};

export default HourlyHeader;
