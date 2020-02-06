const initState = {
  isLoading: false,
  isEmpty: true,
  staffItems: [],
  isFilter: false,
  isUpdate: false
};

export const filterStaffReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FILTER_STAFF': {
      const infoFilter = action.staffInfo.filter(info => {
        return (
          info.first_name
            .toLowerCase()
            .indexOf(action.keyword.toLowerCase()) !== -1 &&
          info.department_staff
            .toLowerCase()
            .indexOf(action.department.toLowerCase()) !== -1
        );
      });
      return {
        ...state,
        isEmpty: false,
        staffItems: infoFilter,
        isFilter: true
      };
    }
    case 'FILTER_RESULT': {
      return { ...state, staffItems: action.staff, isUpdate: true };
    }
    case 'INPUT_DATA': {
      return {
        ...state,
        isLoading: true,
        isEmpty: false,
        staffItems: action.data
      };
    }
    case 'COME_BACK': {
      return { ...state, isUpdate: false };
    }
    default: {
      return { ...state };
    }
  }
};
