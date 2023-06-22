function compareTwoNumber(num1: number, num2: number): number {
    let higherNumber: number;
    let smallestNumber: number;
  
    if (num1 > num2) {
      higherNumber = num1;
      smallestNumber = num2;
    } else {
      higherNumber = num2;
      smallestNumber = num1;
    }
  
    const diference = higherNumber - smallestNumber;
  
    return diference 
  }