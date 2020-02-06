const initState = { isAddStaff: true, staffItems: [] };

export const addStaffReducers = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_STAFF': {
      return {
        ...state,
        isAddStaff: true,
        staffItems: [...state.staffItems, action.info]
      };
    }
    case 'UPDATE_STAFF': {
      return {
        ...state,
        isAddStaff: false,
        staffItems: action.info
      };
    }
    case 'ADD': {
      return { ...state, isAddStaff: true };
    }
    case 'UPDATE': {
      return { ...state, isAddStaff: false };
    }

    default: {
      return { ...state };
    }
  }
};
