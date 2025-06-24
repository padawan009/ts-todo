import { AppDispatch, RootState } from "../app/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// создание кастомных (типизированных) хуков редакс

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// TypedUseSelectorHook - встроенный тип в редакс, 
// который позволяет сделать useselector типизированным