function analyzeSecurity(data) {
  const temp = {};
  temp.truePositive = _.reduce(_.pluck(data, 'truePositive'), (memo, num) => memo + num);
  temp.falsePositive = _.reduce(_.pluck(data, 'falsePositive'), (memo, num) => memo + num);
  temp.trueNegative = _.reduce(_.pluck(data, 'trueNegative'), (memo, num) => memo + num);
  temp.falseNegative = _.reduce(_.pluck(data, 'falseNegative'), (memo, num) => memo + num);

  return temp;
}

console.log(analyzeSecurity([
  {
    truePositive: 1,
    falsePositive: 4,
    trueNegative: 8,
    falseNegative: 2,
  },
  {
    truePositive: 2,
    falsePositive: 4,
    trueNegative: 16,
    falseNegative: 1,
  },
]));
