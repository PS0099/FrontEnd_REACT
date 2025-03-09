import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Replace with your OpenWeatherMap API Key
const API_KEY = "632cd78305e2ca57cb78cf49a9d1eaf4";

// Async action to fetch weather
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    return data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.weatherData = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
