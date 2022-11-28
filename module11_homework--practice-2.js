//Задание 2 (11 урок) - проверка на простое число
function checkNumber(myNum) {
	
	let whatNumber //переменная для записи результата

	if (myNum > 1 && myNum <= 1000) {
		for (let i = 2; i < myNum; i++) {
          
			if(myNum % i === 0) {
              whatNumber = `Число ${myNum} - составное число`;
              return whatNumber;} 
            else {
              whatNumber = `Число ${myNum} - простое число`;
              return whatNumber;}
          
		}//закрыли цикл
		
	} else {            //попадут числа >1, 0, 1, <1000
		whatNumber = 'Данные неверны'; 
        return whatNumber;
	}
	
}
console.log(checkNumber(20)); //"Число 20 - составное число"