// Initialize available times
export const initializeTimes = () => {
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
export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, return the same times regardless of date
      // In the future, this can be updated to fetch times based on the selected date
      return initializeTimes();
    default:
      return state;
  }
};
