const preSchoolSum = (num1, num2) => {
  let result = 0;

  if (num1 + num2 < 0) return (result = 0);

  if (num1 + num2 > 10) return (result = "sok");

  return (result = Math.floor(num1 + num2));
};

module.exports = preSchoolSum;
