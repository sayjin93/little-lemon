import BookingForm from '../components/BookingForm';
import './BookingPage.css';

const BookingPage = ({ availableTimes, dispatch }) => {
  return (
    <section className="booking-page">
      <div className="booking-container">
        <h1>Reserve a Table</h1>
        <p>Book your table at Little Lemon for an unforgettable dining experience.</p>
        <BookingForm 
          availableTimes={availableTimes} 
          dispatch={dispatch} 
        />
      </div>
    </section>
  );
};

export default BookingPage;
