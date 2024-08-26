/**
 * Create Validation Alert.....
 * @param {*} msg
 * @param {*} type
 */
const createAlert = (msg, type = "danger") => {
  return `<p class="alert alert-${type} d-flex justify-content-between"> ${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p>
    `;
};

/**
 *Check a Email Is Email
 * @param {*} email
 * @returns
 */
const isEmail = (email) => {
  const pattern = /^[a-z0-9\._]{1,}@[a-z0-9]{2,}\.[a-z]{2,4}$/;
  return pattern.test(email);
};

/**
 *Check a Mobile Is Mobile
 * @param {*} mobile
 * @returns
 */
const isMobile = (mobile) => {
  const pattern = /^(\.+8801||8801||01)[0-9]{9}$/;
  return pattern.test(mobile);
};

/**
 *generate Unique Id....
 * @returns
 */
const createID = () => {
  // 4-byte timestamp
  const timestamp = Math.floor(Date.now() / 1000).toString(16);

  // 5-byte random value
  const randomValue = Math.floor(Math.random() * 0xffffffffffff)
    .toString(16)
    .padStart(12, "0")
    .substring(0, 10);

  // 3-byte counter
  let counter = Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0");

  // Combine all parts into a 24-character hexadecimal string
  return timestamp + randomValue + counter;
};
