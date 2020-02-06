const initState = {
  isLogin: false,
  isComeBack: false
};

export const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return {
        ...state,
        isLogin: true
      };
    }
    case 'CHECKOUT': {
      return {
        ...state,
        isLogin: false
      };
    }
    case 'COME_BACK': {
      return { ...state, isComeBack: true };
    }
    default: {
      return { ...state };
    }
  }
};
