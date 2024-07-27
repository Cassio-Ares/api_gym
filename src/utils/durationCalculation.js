

export const durationCalculation = (date, duration) =>{
  if(!(date instanceof Date)){
    date = new Date(date)
  }

  let finalDate = new Date(date)

  finalDate.setDate(finalDate.getDate() + duration)

  return finalDate;
}