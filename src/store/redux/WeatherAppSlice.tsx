import { createAppSlice } from "store/createAppSlice";
import { v4 } from "uuid";
import { PayloadAction } from "@reduxjs/toolkit";
import { WeatherSliceInitialState } from "./types";

export const weatherInitialState: WeatherSliceInitialState = {
  data: [],
  error: undefined,
  isFetching: false,
};

export const weatherSlice = createAppSlice({
  name: "WEATHER",
  initialState: weatherInitialState,
  reducers: (create) => ({
    getWeather: create.asyncThunk(
      async (cityName: string, { rejectWithValue }) => {
        const APP_ID = 'https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=9ebdcf15d86c960f135c3ffd7e10de48'; 
        const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APP_ID}`;

        const response = await fetch(WEATHER_API_URL);

        const result = await response.json();

        if (response.ok) {
          return result;
        } else {
          return rejectWithValue(result.message || "Error001"); 
        }
      },
      {
        fulfilled: (state: WeatherSliceInitialState, action) => {
          state.data.push({
            id: v4(),
            name: action.payload.name,
            city: action.payload.name,
            temperature: action.payload.main.temp,
            image: action.payload.weather[0].icon,
          });
          state.isFetching = false;
        },
        rejected: (state: WeatherSliceInitialState, action: PayloadAction<string | undefined>) => {
          state.error = action.payload || "unknown error";
          state.isFetching = false;
        },
      },
    ),
    deleteWeatherCard: (state: WeatherSliceInitialState, action: PayloadAction<{ id: string }>) => {
      state.data = state.data.filter((weatherCard) => weatherCard.id !== action.payload.id);
    },
    deleteAllWeatherCards: () => weatherInitialState,
  }),

  selectors: {
    weather: (state: WeatherSliceInitialState) => {
      return state.data;
    },
  },
});

export const weatherSliceAction = weatherSlice.actions;
export const weatherSliceSelectors = weatherSlice.selectors;
