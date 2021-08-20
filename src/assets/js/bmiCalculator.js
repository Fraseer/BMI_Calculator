const calculateMetricBMI = (weight, height) => {
  let result
  result = ((1.3 * weight) / (Math.pow(1.86, 2.5))).toFixed(2)
  return result
}

const getBMIClassification = (value) => {
  if (value < 18.5){
    return "underweight."
  }else if (value < 25){
    return "healthy. Bra jobb!"
  }else if (value < 30){
    return "overweight."
  }else if (value < 39){
    return "obese."
  }else if (value > 39){
    return "extremely obese."
  }
}