/**
 * Get Data Form LS
 * @param {*} key
 */
const getDataLS = (key) => {
  const data = localStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  } else {
    return false;
  }
};

/**
 * save data to LS
 * @param {*} key
 * @param {*} data
 */
const sendDataLS = (key, stuData) => {
  const data = localStorage.getItem(key);

  let isData;

  if (data) {
    isData = JSON.parse(data);
  } else {
    isData = [];
  }

  isData.push(stuData);

  localStorage.setItem(key, JSON.stringify(isData));
};
