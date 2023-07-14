import { format } from "date-fns";

export const formateDate = (dateNumber: number) => {
  const dt = dateNumber * 1000;
  const formattedDate = format(new Date(dt), "HH:mm");
  return formattedDate;
};

export const todayDate = () => {
  const formattedDate = format(Date.now(), 'yyyy-MM-dd HH:mm:ss');
  return formattedDate
};

export const checkPressure = (pressure: number) => {
  const formatedPressure = Math.round(pressure * 0.750062);
  if (formatedPressure >= 700 && formatedPressure <= 800) {
    return "normal";
  } else if (formatedPressure <= 699) {
    return "low pressure";
  } else if (formatedPressure >= 801) {
    return "high pressure";
  }
};

export const getWindDirection = (deg: number) => {
  if (deg >= 337.5 || deg < 22.5) {
    return "north";
  } else if (deg >= 22.5 && deg < 67.5) {
    return "northeast";
  } else if (deg >= 67.5 && deg < 112.5) {
    return "east";
  } else if (deg >= 112.5 && deg < 157.5) {
    return "southeast";
  } else if (deg >= 157.5 && deg < 202.5) {
    return "south";
  } else if (deg >= 202.5 && deg < 247.5) {
    return "southwest";
  } else if (deg >= 247.5 && deg < 292.5) {
    return "west";
  } else if (deg >= 292.5 && deg < 337.5) {
    return "northwest";
  } else {
    return "Unknown";
  }
};
