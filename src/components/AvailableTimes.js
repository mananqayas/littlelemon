import { useEffect, useState } from "react";
import { fetchAPI } from "../api";

function AvailableTimes({ error, onBlur, touched, value, onChange }) {
  const [availableTimes, setAvailableTimes] = useState([]);

  const fetchTimes = async () => {
    const date = new Date();

    const result = fetchAPI(date);
    setAvailableTimes(result);
  };

  useEffect(() => {
    fetchTimes();
  }, []);
  return (
    <div>
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        name="time"
      >
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      {error && touched && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}
export default AvailableTimes;
