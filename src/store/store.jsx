import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../sliceCounter/slice-counter';
import SliceLogin from '../sliceLogin/SliceLogin';
import DetallesSlice from '../detalles-slice/Detalles-Slice';
export const store = configureStore({
  reducer: {
counter:counterReducer,
login:SliceLogin,
productById:DetallesSlice,


  },
})