import React, { createContext, useContext, useState } from "react";
import Popup from "../components/Popup/Popup";
import { IPopupDay } from "../types";

interface IOwnProps {
  children: React.ReactNode;
}
interface IPopup {
  popupHidden: boolean;
  openPopup: (data: IPopupDay) => void;
  closePopup: () => void;
  data: null | IPopupDay;
}

const PopupContext = createContext<IPopup>({
  popupHidden: true,
  openPopup: (data: IPopupDay) => {},
  closePopup: () => {},
  data: null,
});

export const PopupProvider: React.FC<IOwnProps> = ({ children }) => {
  const [popupHidden, setPopupHidden] = useState(true);
  const [dataPopup, setDataPopup] = useState(null);

  const openPopup = (data: any) => {
    setDataPopup(data);
    setPopupHidden(false);
  };

  const closePopup = () => {
    setPopupHidden(true);
  };

  return (
    <PopupContext.Provider value={{ closePopup, openPopup, popupHidden, data: dataPopup }}>
      {children}
      <Popup />
    </PopupContext.Provider>
  );
};

export function usePopup() {
  return useContext(PopupContext);
}
