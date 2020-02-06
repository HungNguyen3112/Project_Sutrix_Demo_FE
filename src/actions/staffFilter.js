export const filterStaff = (staffInfo, keyword, department) => {
  return {
    type: 'FILTER_STAFF',
    staffInfo,
    keyword,
    department
  };
};

export const inputData = data => {
  return {
    type: 'INPUT_DATA',
    data
  };
};

export const filterResult = staff => {
  return {
    type: 'FILTER_RESULT',
    staff
  };
};

export const toBack = () => {
  return {
    type: 'COME_BACK'
  };
};
