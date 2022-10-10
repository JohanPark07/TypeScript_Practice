{
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  addNumbers(1, 2);
  addNumbers(1, 2, 3, 4);
}
