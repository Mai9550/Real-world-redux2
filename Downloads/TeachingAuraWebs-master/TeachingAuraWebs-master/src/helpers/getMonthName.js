/**
 * @author Celestin N.
 * @param {Number} index It should be >= 0 and <= 11
 * @returns The corresponding month name
 */
const getMonthName = (index) => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return monthNames[index];
}

export default getMonthName;