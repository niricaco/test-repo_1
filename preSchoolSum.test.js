const preSchoolSum = require("./preSchoolSum");

test("Tiz alatti egesz eredmenynel, magat a szamot kapjuk.", () => {
  expect(preSchoolSum(4, 4)).toBe(8);
});
