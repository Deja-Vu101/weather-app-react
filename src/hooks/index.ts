import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDebounce = (value: string, delay: number) => {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounce(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounce;
};
