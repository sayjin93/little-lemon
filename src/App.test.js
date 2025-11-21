import { initializeTimes, updateTimes } from './utils/timesReducer';

// Test for initializeTimes function
test('initializeTimes returns the correct expected value', () => {
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const result = initializeTimes();
  
  expect(result).toEqual(expectedTimes);
  expect(result).toHaveLength(6);
  expect(result[0]).toBe('17:00');
  expect(result[5]).toBe('22:00');
});

// Test for updateTimes function
test('updateTimes returns the same value that is provided in the state', () => {
  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  
  // Test UPDATE_TIMES action
  const action = { type: 'UPDATE_TIMES', payload: '2024-01-01' };
  const result = updateTimes(initialState, action);
  
  // Currently, updateTimes returns the same times regardless of date
  expect(result).toEqual(initialState);
  expect(result).toHaveLength(6);
});

// Test for updateTimes with default case
test('updateTimes returns the same state when action type is not recognized', () => {
  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  
  // Test with unknown action type
  const action = { type: 'UNKNOWN_ACTION' };
  const result = updateTimes(initialState, action);
  
  expect(result).toEqual(initialState);
  expect(result).toBe(initialState); // Should return the exact same reference
});

// Test for updateTimes with UPDATE_TIMES action returns initialized times
test('updateTimes with UPDATE_TIMES action returns initialized times', () => {
  const initialState = ['17:00', '18:00'];
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  
  const action = { type: 'UPDATE_TIMES', payload: '2024-12-25' };
  const result = updateTimes(initialState, action);
  
  expect(result).toEqual(expectedTimes);
  expect(result).toHaveLength(6);
});

