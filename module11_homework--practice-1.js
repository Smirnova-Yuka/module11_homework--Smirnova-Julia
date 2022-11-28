//Задание 1 (11 урок)
function countArrayElement(){
  
    let arr5 = [1, 2, 3, 5, 0, 4];
    let countEven = 0;
    let countOdd = 0;
    let countNull = 0;
    
    for(let i = 0; i < arr5.length; i++) {
        if (i % 2==0) if (i !==0) {
          countEven++;
        } if(i % 2==1){
          countOdd++;
        } if(i == 0) {
          countNull++;
        }
    } 
    console.log("чётные числа:" + countEven);
    console.log("нечётные числа:" + countOdd);
    console.log("нули:" + countNull);
      
      };
    
    countArrayElement();