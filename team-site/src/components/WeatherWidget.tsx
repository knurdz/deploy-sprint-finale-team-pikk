import { useEffect, useState } from "react";

type Weather = {
  provider: string;
  city: string;
  fetched_at: string;
  temperature_c: number;
  feels_like_c: number;
  humidity: number;
  conditions: string;
  description: string;
};

export default function WeatherWidget() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/weather")
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(setWeather)
      .catch((e) => setError(String(e)));
  }, []);

  if (error) return <div className="weather-widget">Weather unavailable</div>;
  if (!weather) return <div className="weather-widget">Loading weather…</div>;

  return (
    <div className="weather-widget">
      <h3>Weather in {weather.city}</h3>
      <p>
        {Math.round(weather.temperature_c)}°C — {weather.description}
      </p>
      <p>
        Feels like {Math.round(weather.feels_like_c)}°C · Humidity{" "}
        {weather.humidity}%
      </p>
      <small>
        Source: {weather.provider} · fetched {weather.fetched_at}
      </small>
    </div>
  );
}