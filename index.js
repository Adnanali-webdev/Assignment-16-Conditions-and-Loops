// Ans 1) 
// a ) if statement

let a = 18;
if(a >= 18){
    console.log("Eligible to Vote");
}

// b) if-else statement

let b = 20;

if( b >= 20){
    console.log("I am Mature Enough! ");
}else{
    console.log("I am still child ");
}

// c) nested if statement 

let c = 90;
if( c >= 33.33){
    console.log("Yes!  Pass");
if( c >=90 ){
    console.log("Yes! I have did the in the exam Top ");
}
}else{
    console.log("Oh! Fail")
}

// d) if elseif  ladder
 let hour = 3;
 let minute = 45;
 let seconds = 30;
 
 if ( hour >= 4 && hour < 12){
    console.log("good morning");
 }else if( hour >= 12 && hour < 15 || (hour === 15 && minute <= 30)){
    console.log("good afternoon");
 }
 else if ( hour > 15 && hour < 19 || (hour === 19 && (minute < 45 || 
            ( minute === 45 && seconds <= 30)))){
    console.log("good evening");
 }else  {
    console.log("good night")
 }

 // e) switch statement 

 let day = [ "sunday","monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
 let getDay = new Date().getDay();
//  console.log(getDay);
 let today = day[getDay];
//  console.log(today);
 switch(today){
    case "monday":
        console.log("mon");
        break;
    case "tuesday":
        console.log("tue");
           break;
     case "wednesday":
        console.log("wed");
        break;
      case "thursday":
        console.log("thu");
        break;
        case "friday":
         console.log("fri");
         break;
         case "saturday":
          console.log("sat");
          break;
          default:
           console.log("sun");              
    } 



    // Ans 2)

    let _score = 49;

    if(_score > 90){
        console.log(" your score is " + _score + "\n your grade is A ")
    }else if(_score > 70){
        console.log(" your score is " + _score + "\n your grade is B ")
  
    }else if(_score > 50){
        console.log(" your score is " + _score + "\n your grade is C ")

    } else{
        console.log(" your score is " + _score + "\n your grade is F ")
  
    }


    //Ans 3)

   //1) 
   for(let i = 0; i <= 5; i++ ){
        console.log(i);
    };
    
    //2)
    let i = 15;
    while(i >= 10){
        console.log(i);
        i--;
    }

    //3) 
    let x = 7;       // here i have given condition false still it give us a one output 
    do{
       console.log(x);
       x++;
    }while(x >= 10); /// if we correct  condition it will run same as while loop

  //4) 
  let fruit = ["mango", "apple", "grapes"];
  for(let fruits of fruit){
    console.log(fruits);
  }

  //5)

  const profile = {name:"adnan",
                age:23,
            nationaity:"Indian",
            };
    for(let key in profile){
        console.log(key + ":" + profile[key]);
    }        


  
    

    /// Ans 4 )

    const num1 = 10;
    const num2 = 25;
     /// using for loop
     console.log("using for loop")
    for( let i = num1;  i <= num2; i++){
        console.log(i);
    }
    ///using while loop
     console.log("using while loop")
    let m = num1;

    while(m <= num2){
        console.log(m);
        m++;
    };


    
    // Ans 5) 

   console.log("1 to 25 Ascending order");
    let n = 1;
    while(n <= 25){
        console.log(n);
        n++;
    }
    console.log("1 to 25 Descending order");
    let d = 25;
    while (d >= 1){
        console.log(d);
        d--;
    }