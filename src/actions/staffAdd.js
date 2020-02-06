export const addNewStaff = info => {
  return {
    type: 'ADD_STAFF',
    info
  };
};

export const updateStaff = info => {
  return {
    type: 'UPDATE_STAFF',
    info
  };
};

export const add = () => {
  return {
    type: 'ADD'
  };
};

export const update = () => {
  return {
    type: 'UPDATE'
  };
};
