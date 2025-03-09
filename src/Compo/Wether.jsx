import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./redux/weatherSlice";

const WeatherComponent = () => {
  const dispatch = useDispatch();
  const { weatherData, status, error } = useSelector((state) => state.weather);
  const user = useSelector((state) => state.auth.currentUser); // Get logged-in user

  useEffect(() => {
    if (user) {
      const userCity = "Mumbai"; // You can store user city in local storage or user profile
      dispatch(fetchWeather(userCity));
    }
  }, [dispatch, user]);

  return (
    <div>
      <h2>Weather Info</h2>
      {status === "loading" && <p>Loading weather...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {weatherData && (
        <div>
          <h3>{weatherData.name}</h3>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Condition: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
