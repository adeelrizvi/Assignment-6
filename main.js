//Chap 21-28
//task1
var a=prompt("Enter your first name ");
var b=prompt("Enter your last name");
var c=a.concat(b);
alert(c);

//task2
var d=prompt("Favourite phone");
alert(d.length);

//task3
var e="Pakistani";
alert("String:"+e+"\n"+"Index of n:"+e.indexOf("n"));

//task4
var f="Hello World";
alert("String:"+f+"\n"+"Last index of l:"+f.lastIndexOf("l"));

//task5
var g="Pakistani";
alert("String:"+g+"\n"+"Index of 3:"+g.charAt("3"));

//task6
var a=prompt("Enter your first name ");
var b=prompt("Enter your last name");
var c=a.concat(b);
alert(c);

//task7
var h="Hyderabad";
var i=h.replace("Hyder","Islam");
alert(i);

//task8
var message = "Ali and Sami are best friends. They play cricket and football together.";
alert(message.replace(/and/g,"&"));

//task9
var value=472;
var x=value.toString();

alert(value+":"+typeof(value)+ "\n" +value+":" +typeof(x));

//task10
var inp="penauts";
alert(inp.toUpperCase());

//task11
var hee=prompt("Enter anything");
var uu=hee.slice(0,1);
var xm=hee.slice(1);
var f=uu.toUpperCase();
var ff=xm.toLowerCase();
alert(f+ff);


//task13
var user=prompt("Enter you name");
var c=user.indexOf("@");
var c=user.indexOf(".");
var c=user.indexOf(",");
var c=user.indexOf("!");
alert("please enter a valid name");

//task14
var kp=prompt("Welcome to ABC bakery.What do you want to order");
kp=kp.toLowerCase();
var le= ["cake", "apple pie", "cookie", "chips", "patties"];
for(m=0;m<le.length;m++){
if(le[m]===kp){
    var ax=le.indexOf(kp);
    document.write(le[m]+" yes its avaliable at index "+ax+" in our bakery");
    break;
}


    else{
        document.write("We are sorry "+kp+" is not available in our bakery ");
        break;
    }
}
//Chap 26-30

//task1
var p=prompt("Enter a number");
alert(p);
var j=Math.round(p);
alert(j);
var j=Math.floor(p);
alert(j);
var j=Math.ceil(p);
alert(j);

//task2
var p=prompt("Enter a number");
alert(p);
var j=Math.round(p);
alert(j);
var j=Math.floor(p);
alert(j);
var j=Math.ceil(p);
alert(j);

//task3
var lw=-4;
alert("The absolute value of " +lw+" is "+Math.abs(lw));

//task4
var u=Math.random()*6+1;
var pq=Math.floor(u);
alert("Random value of dice is "+pq);

//task5
var o=Math.random()*2+1;
var qo=Math.floor(o);
if (qo===1){
    alert("Tails");
}
else if(qo===2){
    alert("Heads");
}

//task6
var hund=Math.random()*100+1;
var ans=Math.floor(hund);
alert("Random number between 1 and 100 :"+ans);

//task8
var secret=Math.random()*10+1;
var sq=Math.floor(secret);
var ans2=parseInt(prompt("Enter your number"));
if (ans2===sq){
    alert("Bingo! right answer");
}
else {
    alert("Try again");
}

//Chap 31-34

//task1
var dt=new Date();
alert(dt);

//task2
var mon=['january','Feb','March','April','May','June','July'];
var tdx=new Date();
var xt=tdx.getMonth();
alert(mon[xt]);

//task3
var x=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
        var t=new Date();
        var p=t.getDay();
        var t=x[p];
        var xa=t.slice(0,3);
        document.write("Today is "+xa);

//task4
         var fun=new Date();
        var dy=fun.getDay();
        var apl=x[dy];
        if (apl==="saturday"){
            alert("fun day");
        }
        else if(apl==="sunday"){
            alert("fun day");
        }
        else{
            alert("No fun day :D");
        }
//task5
    var funn =new Date();
    var uu=funn.getDate();
    if (uu<=15){
        alert("First fifteen days of month");
    }
    else{
        alert("Last days of the month");
    }

//task7
var tp=new Date();
var x=tp.getHours();
if (x>=24 || x<=12){
    alert("AM");
}
else{
    alert("PM");
}

//task8
var zz=new Date("May 31,2020");
alert(zz);

//task9
var rmdd=new Date("June 18,2015");


        var a=new Date("June 18 ,2015");
        var x=a.getTime();
        var b=new Date();
        var z=b.getTime();
        var d=z-x;
        var ag=d/(1000*60*60*24);

        var wq=Math.floor(ag);
       alert( wq+" days have passed since 1st Ramadan");


//task11  
       var he=new Date("December 05,2015");
         var hel=he.getTime();
         var xq=new Date();
         var ee=xq.getTime();
         var ty=ee+hel;
 
         alert(ty);

//task14
var unitss=410;
var charg=16;
document.write("K-ELECTRIC BILL"+"<br>");
document.write("Custome Name:ABC Customer"+"<br>");
document.write("Number of units :"+unitss+"<br>");
document.write("Charges per unit"+charg+"<br>")
var n=unitss*charg;
document.write("Payable within due date "+n.toFixed(2)+"<br>");
var n=n+350;
document.write("Payable within due date "+n.toFixed(2)+"<br>");


//Chap 35-38
//task1
function telldate(){
    var qp=new Date();
    alert(qp);

}
telldate();

//task2
function namew(firstn,lastn){

    alert(firstn+lastn);
}
namew("adeel ","rizvi");

//task3
function add(a,b){

    return a+b;
}
var xx=add(2,3);
alert(xx);

//task4
function cal(s,oper,l){

    if (oper==="+"){
        alert(s+l);
    }
    else if(oper==="-"){
        alert(s-l);
    }
    else if(oper==="*"){
        alert(s*l);
    }
    else if(oper==="/"){
        alert(s/l);
    }
    else{
        alert("Wrong operator");
    }
}
cal(4,"*",5);

//task5
function square(num){
    return num*num;

}
var a=square(5);
alert(a);

//task6
function factorial (n){

    j = 1;
    for(i=1;i<=n;i++){
      j = j*i;
    }
    return j;
  }
  var xr=parseInt(prompt("Enter a number"));
  var xrr=factorial (xr);
  alert(xrr);

//task7
function counting(){

    for(a=uu;a<=uxi;a++){
        document.write(a+"<br>");
    }}
  var uu=parseInt(prompt("Enter a number"));
  var uxi=parseInt(prompt("Enter a number"));
counting();

//task8
function calcHypotenus(base,  per) {
   
    
        return (base + per) ;}
        function sqrrt(){
        return (base*base+per*per);

    
}

var per=parseInt(prompt("Enter a number"));
var base=parseInt(prompt("Enter a number"));

var ty=calcHypotenus(base,per);
var yu=sqrrt(base,per);
alert(ty);
alert(yu);

//task9
function area(w,h){
    return w*h;
}
var xv=area(3,4);
alert(xv);

//task11
function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital_letter("the quick brown fox"));