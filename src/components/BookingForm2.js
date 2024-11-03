import "./css/BookingForm.css";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import AvailableTimes from "./AvailableTimes";

const ReservationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short!")
    .max(50, "Name is too long!")
    .required("Name is required"),
  phone: Yup.number()
    .min(2, "Phone number is too short!")

    .required("Phone number is required"),
  date: Yup.date().required("Date is required"),
  time: Yup.string().required("Time is required"),
  guests: Yup.number().required("Number of guests is required"),
  occasion: Yup.string().required("Occasion is required"),
});

function BookingForm2() {
  const navigate = useNavigate();
  const onSubmit = (values) => {
    console.log(values);
    navigate("/thankyou");
  };
  const { handleChange, values, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
        occasion: "",
      },
      validationSchema: ReservationSchema,
      onSubmit,
    });

  return (
    <div className="container booking">
      <h1>Book Now </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Your name:</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
            style={errors.name && touched.name && { border: "1px solid red" }}
          />
          {errors.name && touched.name && (
            <div style={{ color: "red" }}>{errors.name}</div>
          )}
        </div>

        <div>
          <label htmlFor="phone">Your phone:</label>
          <input
            type="text"
            value={values.phone}
            id="phone"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phone && touched.phone && (
            <div style={{ color: "red" }}>{errors.phone}</div>
          )}
        </div>
        <div>
          <label htmlFor="date">Choose date:</label>
          <input
            type="date"
            value={values.date}
            onChange={handleChange}
            onBlur={handleBlur}
            id="date"
          />
          {errors.date && touched.date && (
            <div style={{ color: "red" }}>{errors.date}</div>
          )}
        </div>
        <AvailableTimes
          error={errors.time}
          onBlur={handleBlur}
          touched={touched.time}
          value={values.time}
          onChange={handleChange}
        />

        <div>
          <label htmlFor="guests">Number of guests:</label>
          <input
            type="number"
            value={values.guests}
            onChange={handleChange}
            onBlur={handleBlur}
            id="guests"
          />
          {errors.guests && touched.guests && (
            <div style={{ color: "red" }}>{errors.guests}</div>
          )}
        </div>
        <div>
          <label htmlFor="occasion">Occasion</label>
          <select
            name="occasion"
            id="occasion"
            value={values.occasion}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <button type="submit">Make a Reservation</button>
      </form>
    </div>
  );
}
export default BookingForm2;
