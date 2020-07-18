// chap no 21-25
 // q no 01
//  var first_name=prompt("Enter your first name");
//  var last_name=prompt("Enter your last name");
//  var fullName=("welcome "+" "+ first_name+" "+last_name);
//  alert(fullName)

 //q no 2
//  var phone= prompt("Enter your favorite mobile phone model");
//  var print=("My favourite phone is:"+ phone);
                                                  
//  var b=print.length;
// document.write("My favourite phone is:"+ phone + "<br>length of string:"+b)

// q no 3
// var d= ("Pakistani");
// var e=d.indexOf("n");
// document.write("String:"+d+"<br>Index of 'n':"+e);

//q no 4
// var d= ("Hello World");
// var e=d.lastIndexOf("l");
// document.write("String:"+d+"<br>Index of 'n':"+e);

//q no 5
// var d= ("Pakistani");
// var f = d.charAt(3);
// document.write("String:"+d+"<br>Character at index 3 :"+f);

 //q no 6
//  var first_name=prompt("Enter your first name");
//  var last_name=prompt("Enter your last name");
//  var res =first_name.concat(" ",last_name);
//  var fullName=("welcome "+ res);
//    alert(fullName)

//q no 7
// var g="Hyderabad";
// var ok = g.replace("Hyder", "Islam");
// document.write("city:"+g+"<br>After Replacement:"+ok);

//q no 8
// var message = "Ali and Sami are best friends.They play cricket and football together.";
// var res = str.replace("and", "&");
// document.write(res);

// // qno 9
// var value=472;
// var n = value.toString();
// document.write("value:"+value+"<br>Type:"+typeof n+"<br>value:"+value+"<br>Type:"+typeof value );

//qno 10
// var User_Input=prompt("Enter here");
// var res = User_Input.toUpperCase();
// document.write("User input:"+User_Input+"<br> Upper case:"+res)

//q no 11                                                                                  y krna h
// q no 12
// var d = 35.36;
// var s = d + '';
// s =s.replace('.', '');
// s = parseInt(s);
// document.write("Number:"+d+"<br>Result:"+s);

// q no 13 14 15                                                                              y krna h
// qno 16                                                                                      y krna h
// var university = "University of Karachi";
// var i = university.split(', '); 
// document.write(i)

//qno 17
// var str = prompt("enter here");
// var res = str.slice(-1); 
// document.write("User input:"+str+"<br>Last character of input:"+res)

// q no 18                                                                                      y krna h
// var temp = "This is a string.";
// document.write(temp.count("is"))

// chap 26-30 MATH METHODS 
// qno 1
// var num=prompt("Enter any number:")
// var round=Math.round(num);
// var floor=Math.floor(num);
// var ceil=Math.ceil(num);
// document.write("number:"+num+"<br>Round value:"+round+"<br>Floor value:"+floor+"<br>Ceil value:"+ceil)

// qno 2                                                                                         MASLA H ISMY
// var val=prompt("ENETR A VALUE");
// var round=Math.round(val);
// var floor=Math.floor(val);
// var ceil=Math.ceil(val);
// if(val >= 0){ 
   
//     document.write("number:"+num+"<br>Round value:"+round+"<br>Floor value:"+floor+"<br>Ceil value:"+ceil);
// } else { 
//     alert("not a negative integer!!") 
// }
// Q NO 3
// var num=-4;
// var abso=Math.abs(num);
// document.write("the absolute value of "+num+ " is "+abso)
// q no 4                                                                                             y krna h

// q no 5                                                                                            y krna h
// q no 6
// var g=Math.floor(Math.random() * 100) + 1;
// document.write("Random number between 1 nad 100:"+g)

// q no 7                                                                                             y krna h
// q no 8
// var val=Math.floor((Math.random() * 10) + 1);
// var g=prompt("Enter a value between 1-10:");
// if(g===val){
//  alert("congratulations you are correct.")}
//  else{
//      alert("Try again!!")
//  }
 // chap 31-34
 // q no 1
// var a = new Date();
// document.write(a)
// q no 2
// var m_names = ['January', 'February', 'March', 
//                'April', 'May', 'June', 'July', 
//                'August', 'September', 'October', 'November', 'December'];

// d = new Date();
// var n = m_names[d.getMonth()]; 
//alert("Current month:"+n)

// q no 3
//  var m_names = [ 'Sun','Mon', 'Tue', 'Wed', 
//                'Thu', 'Fri','Sat' ];

//  d = new Date();
//  var n = m_names[d.getDay()]; 
//  alert("Today is "+n)

// q no 4
// var a= new Date();
// var b= a.getDay();
// if(b===0)
// {
//     alert("its a Fun day")
// }
// elseif(b===1)
// {
//     alert("its a Fun day")
// }
// q no 5
// var a = new Date();
// if(a<16){
//     alert("First fifteen days of the month")
// }else{
//     alert("Last days of the month")
// }
// q no 6                                                 
// var dob=new Date("Jan 1, 1970");
// var dobmin=dob.getMilliseconds();
// alert(dobmin)
// var d = new Date("Jan 1, 1970 12:00:00");
// var n = d.getMilliseconds();
// alert(n)
// var dt = new Date(7, 1, 1970);
//          document.write("getMilliseconds() : " + dt.getMilliseconds() );
// qno 7
// var date=new Date();
// var r=date.getHours();
// if(r < 12){
//     document.write("It's AM");
// }
// else{
// 	document.write("It's PM");
// }
 // qno 8
// var date=new Date("Dec 31,2020");
// document.write("Later Date : "+date);
// q no 9
// q no 10                                                                                       masla n
// var date1 = new Date("Jan 1, 2015"); 
// var date2 = new Date("Dec 5, 2015"); 
// var Time = date2.getTime() - date1.getTime(); 
// var sec= Time.getSeconds()
// var g= Math.round(sec);
// console.log(g)
// q no 11                                                                                  masla
// var cd=new Date("Dec 05,2015 23:08:16");
// var pd=new Date("Dec 05,1915 23:08:16");
// var diff=(cd-pd)/(1000*60*60);
// var g= diff.getFullYear();
// console.log(g);
// q no 12                                                                                 y krna h
// q no 13
// var age=prompt("Enter your age ");
// var d=new Date();
// var cy=d.getFullYear();
// var by=cy-age;
// d.setFullYear(by);
// document.write("Your Age is : "+age+"<br>Your birth year is : "+d.getFullYear());
// q no 14                                                                                krna h
// chap (35-38)
//q no 1
// function date(){
//     var d=new Date();
//     document.write(d);
// }
// date()
// q no 2
// function greet(){
//     var fn=prompt("Enter first Name ");
//     var ln=prompt("Enter Last Name ");
//     alert("Welcome "+fn+" "+ln);
// }
// greet()
//q no 3
// function sum(){
//     var v1=prompt("Enter value 1:");
//     var v2=prompt("Enter value 2:");
//     alert("The sum of"+v1+ " and " +v2+ " is"+(v1+v2));
// }
// sum()
// qno 4
// function cal(){
//     var num1=prompt("enter num1:")
//     var num2=prompt("enter num2:")
//     var operator=prompt("enter operator:")
//     if(operator==="+"){
//         res=(num1+num2);
//         alert(res);
//     }
//     else if(operator==="-"){
//         res=(num1-num2);
//         alert(res);
//     }
//     else if(operator==="*"){
//         res=(num1*num2);
//         alert(res);
//     }
//     else if(operator==="/"){
//         res=(num1/num2);
//         alert(res);
//     }
//     else{
//         alert("Enter valid operator")
//     }
// }
// cal()
// q no 5
// function sqr(){
//     var num=prompt("Enter any number");
//     var res=(num*num);
//     alert("Square of "+ num+ " is " +res)
// }
// sqr()
// q no 6
// function factorial(val){
//     var val=prompt("enter any value:");
//     var f=1;
//     for(var i=1; i<=val; i++){
//         f=i*f;
//     }
//     alert("the factorial of the number is "+ f);
// }
// factorial()
// q no 7
function count(){
    var s=+prompt("counting starts from:");
    var e=+prompt("counting ends at:");
    for(var i=s;i<=e;i++ ){
        document.write(i+" ");
    }
}
count()