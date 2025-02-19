import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HomeState {
  countries: any[];
  loading: boolean;
  error: string | null;
}

const initialState: HomeState = {
  countries: [],
  loading: false,
  error: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    fetchCountriesRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCountriesSuccess: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.countries = action.payload;
    },
    fetchCountriesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchCountriesRequest, fetchCountriesSuccess, fetchCountriesFailure } = homeSlice.actions;
export default homeSlice.reducer;
