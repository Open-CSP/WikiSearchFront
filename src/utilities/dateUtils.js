/**
 * create julian date
 *
 * @param {String} date formatted date YYYY-MM-DD
 * @returns {Number}    julian date timestamp
 */
function createDate(date) {
  return parseInt(window.moment(date) / 86400000 + 2440587.5, 10);
}

/**
 * create human readable date
 *
 * @param {Date} date a date object
 * @returns {String}  formatted date YYYY-M-D
 */
function readableDate(date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export { createDate, readableDate };
