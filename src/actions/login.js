export const login = data => {
  return {
    type: 'LOGIN',
    data
  };
};

export const checkOut = data => {
  return {
    type: 'CHECKOUT',
    data
  };
};

export const comeBack = () => {
  return {
    type: 'COME_BACK'
  };
};
