const calculateMetricBMI = (weight, height) => {
  let result
  result = (weight / (height * height)).toFixed(2)
  return result
}