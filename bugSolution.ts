function printAllNumbersThenAllPairSumsEfficiently(numbers: number[]): void {
  console.log('Numbers:');
  numbers.forEach(number => console.log(number));

  console.log('\nPair sums:');
  const pairSums = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      pairSums.push(numbers[i] + numbers[j]);
    }
  }
  pairSums.forEach(sum => console.log(sum)); 
}

const myNumbers: number[] = [1, 2, 3, 4, 5];
printAllNumbersThenAllPairSumsEfficiently(myNumbers); 