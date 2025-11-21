import { render, screen } from "@testing-library/react";
import BookingForm from './index';

test('Renders the BookingForm heading', () => {
  // Mock props
  const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const mockDispatch = jest.fn();

  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
  
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
});

test('Renders all form labels', () => {
  // Mock props
  const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const mockDispatch = jest.fn();

  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
  
  expect(screen.getByText("Choose date")).toBeInTheDocument();
  expect(screen.getByText("Choose time")).toBeInTheDocument();
  expect(screen.getByText("Number of guests")).toBeInTheDocument();
  expect(screen.getByText("Occasion")).toBeInTheDocument();
});

test('Renders submit button', () => {
  // Mock props
  const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const mockDispatch = jest.fn();

  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
  
  const submitButton = screen.getByText("Make Your Reservation");
  expect(submitButton).toBeInTheDocument();
  expect(submitButton).toHaveAttribute('type', 'submit');
});

test('Renders all available times in select dropdown', () => {
  // Mock props
  const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const mockDispatch = jest.fn();

  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
  
  // Check if all times are rendered
  mockAvailableTimes.forEach(time => {
    expect(screen.getByText(time)).toBeInTheDocument();
  });
});

test('Renders form with proper HTML5 validation attributes', () => {
  // Mock props
  const mockAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const mockDispatch = jest.fn();

  render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
  
  const dateInput = screen.getByLabelText("Choose date");
  const guestsInput = screen.getByLabelText("Number of guests");
  
  expect(dateInput).toHaveAttribute('required');
  expect(dateInput).toHaveAttribute('type', 'date');
  
  expect(guestsInput).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
});
