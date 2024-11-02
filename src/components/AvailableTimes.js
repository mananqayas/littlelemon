import { useEffect, useState } from "react";
import { fetchAPI } from "../api";

function AvailableTimes() {
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
      <select required id="res-time ">
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
    </div>
  );
}
export default AvailableTimes;
