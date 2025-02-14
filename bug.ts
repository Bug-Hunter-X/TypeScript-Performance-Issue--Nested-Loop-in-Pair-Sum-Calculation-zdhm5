function printAllNumbersThenAllPairSums(numbers: number[]): void {
  console.log('Numbers:');
  numbers.forEach(number => console.log(number));

  console.log('\nPair sums:');
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      console.log(numbers[i] + numbers[j]);
    }
  }
}

const myNumbers: number[] = [1, 2, 3, 4, 5];
printAllNumbersThenAllPairSums(myNumbers);