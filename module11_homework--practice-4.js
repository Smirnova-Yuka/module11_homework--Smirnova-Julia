    /*задание 4 (11 урок) - Напишите функцию, которая принимает два числа. 
    Каждую секунду необходимо выводить числа в 
    интервале от первого до второго принятого числа. 
    Используйте setInterval.*/

    const countN = function(a,b) {
        let counter = a;
      
        function countN() {
          
          if(counter <= b){
          console.log(counter);
          counter++;}
          
        }
        return countN;
      }(5, 15);
    
    setInterval(countN, 1000); 