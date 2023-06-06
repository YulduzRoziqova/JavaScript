    
    function repeat(str, num) {
        let result = "";
        for (let index = 0; index < num; index++) {
            result = result + str;
        }
        return result;
    }

    console.log(repeat('abcd', 3));

       const indexOf =  function(stringToCheck, position) {
        let result=[];
          for (let i = 0; i < stringToCheck.length;i++) {
            if (stringToCheck[i] === position) {
              result.push(i);
            }
          }
        console.log(result)
        }
        
        console.log(indexOf('My name is John', 'n'));
    
    
       function subString(num1, num2) {
       let subString = "";
        let str = "My firstname is...";
        let rem = str.length;
      
        if (num2 > ren|| num1 < 0 ) {
          console.log("Invalid input");
        } else {
          let ren = 0;
          for (let i = num1; i < num2; i++) {
            subString = subString + str[i];
            ren++;
          }
          console.log(subString);
        }
      }
     console.log(subString(0, 7));
    
    

        
