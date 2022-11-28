//задание 5 (11 урок) - Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
const numPower = (z, x) => {
    let result = z ** x;
    console.log(result);
  }
  numPower(2,5); //32
  
  // или
  const numPower2 = (z, x) => {
    let result = z ** x;
    return result;
  }
  let r = numPower2(2,5);
  console.log(r);