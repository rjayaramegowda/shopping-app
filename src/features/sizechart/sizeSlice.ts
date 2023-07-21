import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface SizeState {
  selectedColor: string;
  selectedSize: 'XS' | 'S' | 'M' |'L' | 'XXL';
  isFavorite:boolean;
}

const initialState: SizeState = {
  selectedColor: "Conchiglia 1",
  selectedSize: 'L',
  isFavorite: false
};



export const sizeSlice = createSlice({
  name: 'size',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setColor: (state, action: PayloadAction<string>) => {
      state.selectedColor = action.payload;
    },
    setSize: (state, action: PayloadAction<any>) => {
      state.selectedSize = action.payload;
    },
    setFavorite: (state) => {
      state.isFavorite = !state.isFavorite;
    },
  },

});

export const { setColor, setSize, setFavorite } = sizeSlice.actions;
export const selectedColor = (state: RootState) => state.size.selectedColor;
export const selectedSize = (state: RootState) => state.size.selectedSize;
export const isFavorite = (state: RootState) => state.size.isFavorite;

export default sizeSlice.reducer;
