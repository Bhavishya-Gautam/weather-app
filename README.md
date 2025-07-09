# 🌦️ React Weather App

A responsive weather application built using **React.js** and **Vite**, which fetches real-time weather data from the **OpenWeatherMap API**. Users can search for any city to view the current temperature, humidity, wind speed, and weather condition with a matching icon.

---

## 📌 Features

- 🔍 City-based weather search
- 🌡️ Shows:
  - Temperature (°C)
  - Humidity (%)
  - Wind Speed (km/h)
  - Condition icon (sunny, rain, clouds, etc.)
- 📡 Live data from OpenWeatherMap API
- 📍 Default city: London (on first load)
- 🚫 Error alert on invalid search
- 💡 Clean, minimal UI

---

## 🧰 Tech Stack

- **React.js** (with Hooks)
- **Vite**
- **CSS**
- **OpenWeatherMap API**
- **JavaScript (ES6+)**

---

## 🗂️ Project Structure

```plaintext
WeatherApp/
├── public/
│   └── index.html
├── src/
│   ├── assets/               # Weather icons
│   │   ├── clear.png
│   │   ├── cloud.png
│   │   ├── drizzle.png
│   │   ├── humidity.png
│   │   ├── rain.png
│   │   ├── search.png
│   │   ├── snow.png
│   │   └── wind.png
│   ├── components/
│   │   ├── Weather.jsx       # Main weather component
│   │   └── Weather.css       # Styling for weather component
│   ├── App.jsx               # Root component
│   ├── index.css             # Global styles
│   └── main.jsx              # React app entry point
├── .gitignore                # Ignored files and folders
├── eslint.config.js          # ESLint configuration
├── package.json              # Project metadata and dependencies
├── package-lock.json         # Exact versions of dependencies
├── vite.config.js            # Vite configuration
└── README.md                 # Project overview and instructions

