import { GlobalSvgSelector } from "../../assets/img/icons/GlobalSvgSelector";
import { IItem } from "../../types";
import s from "./ThisDay.module.scss";

interface ThisDayItemProps {
  item: IItem;
}

const ThisDayItem: React.FC<ThisDayItemProps> = ({ item }) => {
  return (
    <div className={s.ThisDayItem}>
      <div className={s.infoItemPopup}>
        <div className={s.infoItem_leftContent}>
          <div className={s.infoItem_img}>
            <GlobalSvgSelector id={item.icon_id} />
          </div>
          <div className={s.infoItem_title}>{item.name}</div>
        </div>

        <div className={s.infoItem_RightContent}>
          <div className={s.infoItem_description}>{item.value}</div>
        </div>
      </div>
    </div>
  );
};

export default ThisDayItem;
