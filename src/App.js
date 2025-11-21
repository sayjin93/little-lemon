import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import BookingPage from './pages/BookingPage';
import './App.css';

// Initialize available times
const initializeTimes = () => {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
};

// Reducer function to update available times
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, return the same times regardless of date
      // In the future, this can be updated to fetch times based on the selected date
      return initializeTimes();
    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <BrowserRouter>
      <Nav />
      <main role="main" id="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route 
            path="/booking" 
            element={
              <BookingPage 
                availableTimes={availableTimes} 
                dispatch={dispatch} 
              />
            } 
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
