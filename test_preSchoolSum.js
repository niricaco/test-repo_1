const preSchoolSum = require("./preSchoolSum");

testIt(
  8,
  preSchoolSum(4, 4),
  "Tiz alatti egesz eredmenynel, magat a szamot kapjuk."
);
testIt(0, preSchoolSum(-14, 4), "0 alatti eredmenynel, 0-at ad vissza.");
testIt(
  "sok",
  preSchoolSum(14, 4),
  "10 feletti eredmenyel visszaadja a sok szoveget."
);
testIt(10, preSchoolSum(6, 4), "10 eseten, 10-et ad vissza");
testIt(0, preSchoolSum(-6, 6), "0-at ad vissza");
