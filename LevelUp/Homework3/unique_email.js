var numUniqueEmails = function (emails) {
  const set = new Set();

  for (let i = 0; i < emails.length; ++i) {
    const arr = emails[i].split("@");

    arr[0] = arr[0].split("+")[0];
    arr[0] = arr[0].replaceAll(".", "");

    set.add(arr.join("@"));
  }

  return set.size;
};

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);
