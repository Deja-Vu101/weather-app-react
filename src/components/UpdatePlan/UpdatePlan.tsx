import s from "./updatePlan.module.scss";

const UpdatePlan = () => {
  return (
    <div className={s.UpdatePlan}>
      <div className={s.UpdatePlan_overlay}>
        <div className={s.UpdatePlan_Content}>
          <p>This content is paid. Pay to access the weather.</p>
          <div className={s.Button}>
            <a href="https://openweathermap.org/price#onecall" target="_blank">
              Watch plan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePlan;
