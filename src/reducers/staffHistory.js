const initState = {
  isGetInfoHistory: false,
  infoHistory: []
};

export const historyWorkReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_HISTORY': {
      return { ...state, isGetInfoHistory: true, infoHistory: action.history };
    }
    case 'ADD_HISTORY': {
      return {
        ...state,
        infoHistory: [...state.infoHistory, action.newHistory]
      };
    }
    case 'DELETE_HISTORY': {
      return {
        ...state,
        infoHistory: [
          ...state.infoHistory.filter(
            x => x.history_id !== action.deleteHistory.history_id
          )
        ]
      };
    }
    default: {
      return { ...state };
    }
  }
};
