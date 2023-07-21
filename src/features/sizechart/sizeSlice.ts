import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface SizeState {
  selectedColor: string;
  selectedSize: 'XS' | 'S' | 'M' |'L' | 'XXL';
}

const initialState: SizeState = {
  selectedColor: "Conchiglia 1",
  selectedSize: 'L',
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
  },

});

export const { setColor, setSize } = sizeSlice.actions;
export const selectedColor = (state: RootState) => state.size.selectedColor;
export const selectedSize = (state: RootState) => state.size.selectedSize;

export default sizeSlice.reducer;
