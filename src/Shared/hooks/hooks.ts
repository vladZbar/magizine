// hooks.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store'; // Импортируйте типы из вашего store

// Создайте типизированный хук useAppSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Создайте кастомный хук useAppDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Типизируем 