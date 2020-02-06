export const getHistory = history => {
  return {
    type: 'GET_HISTORY',
    history
  };
};

export const addHistory = newHistory => {
  return {
    type: 'ADD_HISTORY',
    newHistory
  };
};

export const deleteHistory = deleteHistory => {
  return {
    type: 'DELETE_HISTORY',
    deleteHistory
  };
};
