# 🌦️ React Weather App

A simple and interactive weather application built using **React.js** that fetches real-time weather data from the **OpenWeatherMap API**. Users can search for any city to view the current temperature, humidity, wind speed, and weather condition with a matching icon.

---

## 📌 Features

- 🔍 Search for any city worldwide
- 🌡️ Displays:
  - Temperature (°C)
  - Humidity (%)
  - Wind Speed (km/h)
  - Weather Icon (based on condition)
- 📦 Live weather data using OpenWeatherMap API
- 🏙️ Shows default weather for London on first load
- ❌ Error handling for invalid city input
- 🧼 Clean and minimal UI

---

## 🧰 Tech Stack

- **React.js**
- **CSS**
- **OpenWeatherMap API**
- **JavaScript (ES6+)**

---

## 📁 Project Structure

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
│   │   └── Weather.css       # Styling for Weather component
│   ├── App.jsx               # Root component
│   ├── index.css             # Global styles
│   └── main.jsx              # React app entry point
├── .gitignore                # Ignored files and folders
├── eslint.config.js          # ESLint configuration
├── package.json              # Project metadata and dependencies
├── package-lock.json         # Exact versions of dependencies
├── vite.config.js            # Vite configuration
└── README.md                 # Project overview and instructions
