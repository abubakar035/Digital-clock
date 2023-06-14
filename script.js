// let randomNum = Math.random();
//  randomNum = randomNum * 39 ;
//  let roundedNumber = Math.round (randomNum);
// document.write (roundedNumber );

// let usersAge = +prompt ("enter your agr");

// if ( usersAge >= 18) {
//     console.log("you are elgible " );
// } else{
//     document.write ("you are not eligible ");
// }

// let userFavnum = +prompt( "enter number");
// let computerNum = Math.round  (Math.random()*10);

// if( userFavnum === computerNum){
//     document.write("you win") ;
//  } else{
//     document.write ("you lose" + computerNum) ;
//  }
// let input = prompt("even or odd");
// let computerNum = Math.round(Math.random() * 10);

// if (computerNum % 2 === 0 && input === "even") {
//     document.write("you win" + computerNum);


// } else if
//     (computerNum % 2 !== 0 && input === "0dd") {
//     document.write("you winnnnnnnneeeeeeerrr" + computerNum);
// } else {
//     document.write("you lose" + computerNum);
// }

// let date = new Date();
// let month =["jan" , "feb" , "mar" , "apr" , "may"] 

// document.write( date.getMilliseconds()) ;


// var date1 = new Date("2022-05-15T03:00:00Z");
// var date2 = new Date("2022-05-15T04:00:00Z");

// console.log(date1 < date2) ;

// var x = 5 ;
// switch (x) {
//    case "5":
//     console.log ("x is '5'") ;
//     break;
//     case 5:
//         console.log("x is 5");
//         break;
//         default :
//         console.log ("x is  neither '5' nor 5") ;

// }

// var str = "hello world" ;
//    console.log(str.includes("world")) ;

// function greet (name = "Anonymous")
// {
//     console.log ("hello, " + name)

// }
// greet();

// var x =10
// function print() {
//     console.log(x);
//     var x =20; 
// }
// print();

// function greet(name) {

//     console.log("hello," + name);
// }
// greet("jhon");

// var date = new Date();
// console.log(date.getMonth());

// function average(a,b){
//     return a+b/2

// }
// console.log(average(2,1));

// var num = 10
// num.toFixed(2);
// console.log(num);

// ans 10

// var str ="hello world" ;
// console.log(str.indexOf("o"))
// ans 4

// var date =new Date()
// console.log(date.toLocaleString())

// var num = 1.5
// console.log(Math.round(num))
// ans 2

// var num =10.5
// console.log(num.toFixed(2));
// ans 10.50

// // console.log(parseInt("101",2))
// ans 5

// function mul (a,b){
//     return a * Number(b)

// }
// console.log(mul("2","3"))
// 6

// var str = "hello world!"
// console.log(str.slice(6))

// var abc123
// var abcGf

// var akr =  new Date().getHours;
// hourEl.innerText= akr ;
// console.log(akr)

// var hourEl = document.getElementById ("ho") ;
// var minuteEl = document.getElementById ("minute") ;
// var secndEl = document.getElementById ("secnd");
// var ampmEl = document.getElementById ("ampm");

// function updateClock (){
//     let h  = new Date().getHours() ;
//     let m  = new Date().getMinutes();
//     let s  = new Date().getSeconds();
//     let ampm  = "AM" ;

//     if(h > 12){
//         h = h - 12;
//         ampm = "pm" ;
//     }

//     hourEl.innerText = h;
//     minuteEl.innerText = m ;
//     secndEl.innerText = s ;

// updateClock()
// console.log(h)


// 

// function displyclock (){
//     var date = newDate()
// var hourEl = dateTime.getHour();
// var minuteEl = dateTime.getMinute();
// var secendEl = dateTime.getSecnd();

// var ampmEl = document.getElementById ("ampm").innerHTML=secendEl;
// if(hourEl >= 12){
//     ampmEl.innerHTML="pm"
// }


// }
// setInterval(displyclock,10);

function displayTime (){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById("session");
    
    if (hrs >=12){
        session.innerHTML = "PM"
        if (hrs >= 12) {
            hrs - 12
        }
    }
    
    
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minuite").innerHTML = min;
    document.getElementById("second").innerHTML = sec;
    
    }
    setInterval(displayTime, 10);