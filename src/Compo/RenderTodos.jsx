import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTask, deleteTask, toggleFavorite } from "../Features/mainSlice";
import { MdDeleteOutline } from "react-icons/md";
import { fetchWeather } from "../Features/weatherSlice";

function RenderTodos() {
  const tasks = useSelector((state) => state.main.tasks);
  const dispatch = useDispatch();

  const outdoorKeywords = ["outdoor", "walk", "run", "hiking", "park"];

  const isOutdoorTask = (task) => {
    return outdoorKeywords.some((keyword) =>
      task.text.toLowerCase().includes(keyword)
    );
  };

  const weather = useSelector((state) => state.weather) || {
    weatherData: null,
    status: "idle",
  };
  const { weatherData, status } = weather;

  const currentUser = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchWeather("Mumbai")); // Replace with user’s actual city
    }
  }, [dispatch, currentUser]);

  return (
    <div className="h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="mt-6 w-full h-[80px] flex justify-between pt-4 pr-8 pb-4 border-t-[1.5px] items-center"
          style={{ borderTop: "1.5px solid rgba(73, 110, 75, 0.2)" }}
        >
          {/* Left Section: Checkbox & Text */}
          <div className="flex flex-col">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => dispatch(toggleTask(task.id))}
                className="w-5 h-5 mr-2 accent-green-600"
              />
              <p
                className={`text-lg ${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {task.text}
              </p>
            </div>
            {isOutdoorTask(task) && weatherData && (
              <p className="text-sm text-gray-500 mt-1">
                🌦 Weather: {weatherData.weather[0].description}
              </p>
            )}
          </div>

          {/* Right Section: Favorite Star & Delete Button */}
          <div className="flex items-center gap-4">
            {/* Favorite Star Checkbox */}
            <label className="cursor-pointer">
              <input
                type="checkbox"
                checked={task.isFavorite}
                onChange={() => dispatch(toggleFavorite(task.id))}
                className="hidden"
              />
              <svg
                className={`w-[21px] h-[20px] transition-colors duration-300 ${
                  task.isFavorite
                    ? "fill-yellow-500 stroke-yellow-500"
                    : "fill-none stroke-gray-400"
                }`}
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </label>

            {/* Delete Task Button */}
            <button
              onClick={() => dispatch(deleteTask(task.id))}
              className="px-1 py-1 bg-red-800 text-white rounded-md text-sm hover:bg-red-600"
            >
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RenderTodos;
