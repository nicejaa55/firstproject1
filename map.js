const bike = ["R1", "R2", "R3"];

const newCar = bike.map((element) => {
  return `${element}_nice`;
  //   return element+"_nice";
});
console.log(newCar);
