(function(){
    /* # # # #
      # # # #
       # # # #
      # # # # */
   //1
    var board="";
        for (let i = 1  ; i<8;i++){
            for(let j =0;j<8;j++){
               if((i+j)%2 == 0){
                   board+=" ";
               }
               else board+="#";
           }
           board+="\n";
        }
    console.log(board);

      //2
    var size = 8;
    var   str = '';
    for(var i = 0;i < size; i++){
        for (var j = 0; j < size; j++){
            if(i%2==0&&j%2==0||i%2!=0&&j%2!=0){
                str+="#";
            }
            else str+=" ";
        }
        console.log(str);
        str='';
    }



   // 0 1 2 3 4
    for(var i = 0; i < 5; i++){
        console.log(i);
    }


    // 10 9 8 7 6 5 4 3 2 1
    var j = 10;
    do{
        console.log(j);
        j--;
    }
    while(j>0);

    //0 1 2 3
    var k = 0;
    while(k<4){
        console.log(k);
        k++;
    }


   ///
  var number = +prompt("Enter a day of week");
switch(number){
    case 1 : console.log("monday1");break;
    case 2 : console.log("monday2");break;
    case 3 : console.log("monday3");break;
    case 4 : console.log("monday4");break;
    case 5 : console.log("monday5");break;
    case 6 : console.log("monday6");break;
    case 7 : console.log("monday7");break;
    default : console.log("NON NO");break;
}


    //////
  for(var i = 1; i < 50; i++){
      if(i%3==0 && i%5==0 ){
          console.log("fizzbuzz");
      }
      else if(i%5==0){
          console.log("buzz");
      }
      else if(i%3==0){
          console.log("fixx");
      }
      else console.log(i);
  }


  /*#
    ##
    ###
    ####
    #####
    ######
    ####### */
   var str ="";
    for(var i =0; i<7;i++){
        str+="#";
        console.log(str);
    }

/////
    var str ="";
    var size =6;
    var height = 9;

    for(var i =1 ; i<=height;i++){
        if(i<+size){
            for(var j= 0;j<i;j++){
                str+="#";
            }
        }
        else {
            for(var k= 0;k<=height-i;k++){
                str+="#";
            }
        }
        console.log(str);
        str='';
    }


    // 3 2 1
      var i =3;
      while(i){
          alert(i--);
      }

      // multiply table
      var start = 1;
      var end = 9;
       for(var i = start;i<=end;i++){
       for(var j = start;j<=end;j++){
        console.log(i+"*"+j+"="+i*j+" ");
       }
   }


    var a = +prompt("start");
    var b = +prompt("end");
    var step =+prompt("step");;

    for(var i = a; i <= b; i+=step){
        console.log(i);
    }



//calculator

var a = +prompt("first number");
var b = +prompt("2 number");
var oper = prompt("write operator");
while(true){
    switch(oper){
        case "+" : console.log('a+b='+(a+b));break;
        case "-" : console.log('a-b='+ (a-b));break;
        case "*" : console.log('a*b='+a*b);break;
        case "/" : console.log('a/b='+a/b);break;
        default:console.log("watman");
    }
}

}());








