import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import BookingPage from './pages/BookingPage';
import { initializeTimes, updateTimes } from './utils/timesReducer';
import './App.css';

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
