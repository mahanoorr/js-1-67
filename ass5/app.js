
   // PDF SOLUTIONS.
   // CHAPTER NO 1
 
     // Q NO 1
//alert("Thanks for coming cheers!");
    // Q NO 2
//alert("Error! Please enter a valid password.");
    // Q NO 3
//alert("Welcome to JS land.../nhappy coding!");
    // Q NO 4
//alert("Welcome to JS land...");
//alert("happy coding!");
     // Q NO 5
//console.log("Hello i can run js through my browser console");
    // Q NO 6                                                                  y krna h
    // Q NO 7                                                                  y krna h

    //CHAPTER NO 02
    // Q NO 1
 //var username
    // Q NO 2
//var myName="Mahanoor"
    // Q NO 3
//var message="Hello World"
//alert(message)
    // Q NO 4
//var name="Jhon doe" 
//var age="15 years old"
//var studies="Certified Mobile Application Development"
//alert(name);
//alert(age);
//alert(studies);
     // Q NO 5
///var food="PIZZA"                                                                  y krna h
//alert(food);                                                                  y krna h
    // Q NO 6
//var email="mahanoornaseer9910@gmail.com"
//var str1="My email address is"
//var comb=str1.concat(email)
//alert(comb);
    // Q NO 7 
//var book="A smarter way to learn JavaScript"
//var str2="I am trying to learn from the Book  "
//var bon=str2.concat(book)
//alert(bon);
    // Q NO 8
//document.write("Yah! I can write HTML content through JavaScript")
    // Q NO 9
     
    //CHAPTER NO 03                                                                          //y krna h
     // Q NO 1
//var age= 15
//var str4="I am "  
//var str5= " years old"
//var str6=str4.concat(age,str5)
//alert(str6)
          // Q NO 2
          function VisitCounter(){

            var visits = GetCookie("counter");
            
            if (!visits) { visits = 1;
            
            document.write("By the way, this is your first time here.");
            
            }
            
            else {
            
            visits = parseInt(visits) + 1;
            
            document.write("I note, you have been here " + visits + " times.");}
            
            setCookie("counter", visits,expdate);





            }
