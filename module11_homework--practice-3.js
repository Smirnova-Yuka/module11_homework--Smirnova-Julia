    /*задание 3 (11 урок) - Напишите функцию, 
    которая принимает число как аргумент и возвращает функцию, 
    которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
    Выведите в консоль результат.*/
    function sumNum(x) {
        return function(z) {
          let result = x+z;
            return result;
        };
    }
    console.log(sumNum(34)(6));   //40