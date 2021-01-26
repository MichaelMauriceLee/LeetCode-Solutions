const numRescueBoats = (people, limit) => {
    people.sort((a, b) => a - b);
    let boats = 0;
    let i = 0;
    let j = people.length - 1;

    while (i <= j) {
      boats++;
      if (people[i] + people[j] <= limit) {
        i++;
      }
      j--;
    }

    return boats;
};

console.log(numRescueBoats([3, 2, 2, 1], 3))
