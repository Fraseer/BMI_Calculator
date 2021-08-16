const calculateMetricBMI = (weight, height) => {
  let result
  result = (weight / ((height * height) / 10000)).toFixed(2)
  return result
}

const getBMIClassification = (value) => {
  if (value < 18.5){
    return "underweight. Try eating something, you skeleton!"
  }else if (value < 25){
    return "healthy. Bra jobb!"
  }else if (value < 30){
    return "overweight."
  }else if (value < 39){
    return "obese."
  }else if (value > 39){
    return "extremely obese. Lose some weight fatty!"
  }
}