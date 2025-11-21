import { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ availableTimes, dispatch }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion
    };
    console.log('Reservation submitted:', formData);
    // TODO: Handle form submission
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} aria-labelledby="booking-form-title">
      <div className="form-field">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="res-date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
          }}
          required
          aria-required="true"
        />
      </div>

      <div className="form-field">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          aria-required="true"
        >
          <option value="">Select a time</option>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          placeholder="1"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
          aria-required="true"
          aria-valuemin="1"
          aria-valuemax="10"
        />
      </div>

      <div className="form-field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
          aria-required="true"
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <button type="submit" className="submit-button" aria-label="Submit reservation">
        Make Your Reservation
      </button>
    </form>
  );
};

export default BookingForm;
