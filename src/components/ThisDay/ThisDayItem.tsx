import { GlobalSvgSelector } from "../../assets/img/icons/GlobalSvgSelector";
import s from "./ThisDay.module.scss";

interface IOwnProps {
  iconId: string;
  title: string;
  description: string;
}

const ThisDayItem: React.FC<IOwnProps> = ({ iconId, title, description }) => (
  <div className={s.infoItem}>
    <div className={s.infoItem_leftContent}>
      <div className={s.infoItem_img}>
        <GlobalSvgSelector id={iconId} />
      </div>
      <div className={s.infoItem_title}>{title}</div>
    </div>
    <div className={s.infoItem_RightContent}>
      <div className={s.infoItem_description}>{description}</div>
    </div>
  </div>
);

export default ThisDayItem;
