import { useState } from "react";
import "./css/BookingForm.css";
import AvailableTimes from "./AvailableTimes";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../api";

function BookingForm() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [formDate, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    console.log("submitted");
    submitAPI(formDate);
    console.log(formDate);
    navigate("/thankyou");
  };
  return (
    <>
      <div className="container booking">
        <h1>Book Now </h1>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="res-date">Choose date</label>
            <input
              required
              type="date"
              id="res-date"
              value={formDate.date}
              onChange={(e) =>
                setFormData({ ...formDate, date: e.target.value })
              }
            />
          </div>
          <AvailableTimes />
          <div>
            <label htmlFor="guests">Number of guests</label>
            <input
              required
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={formDate.guests}
              onChange={(e) =>
                setFormData({ ...formDate, guests: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="occasion">Occasion</label>
            <select
              required
              id="occasion"
              value={formDate.occasion}
              onChange={(e) =>
                setFormData({ ...formDate, occasion: e.target.value })
              }
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>

          <button type="submit" className="reserve-btn">
            {submitting ? "Making Reservation..." : "Make Reservation"}
          </button>
        </form>
      </div>
    </>
  );
}
export default BookingForm;
