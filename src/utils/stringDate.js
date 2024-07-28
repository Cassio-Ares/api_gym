/**
 * @param {data em formato de string} date 
 * @returns dado no formato de data 
 */

export const stringDate = (dateStr) => {
  const [day, month, year] = dateStr.split('/'); 
 
  const newDate = new Date(year, month-1, day)

  return newDate
};
