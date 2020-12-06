//2
let x=5;
let res=x*30-100;
console.log(res);
//3
let y, z, rea;
y=3;
z=4;
rea=y*z;
console.log('Ploschad pryamougolnika=', rea);
//5
const current_year = 2020;
const last_year = current_year-1;
const next_year=urrent_year+1;
console.log('last_year', last_year);
console.log('next_year', next_year);
//7
let a, b, c;
a=100;
b=45;
c=145;
c=a*x+b;
x=(c-b)/a;
console.log('x=',x);
//8
let hours;
hours=parseInt(prompt('enter some hour'));
let minuts=hours*60;
let seconds=minuts*60;
console.log('h=', hours, 'm=', minuts, 's=', seconds);
//9
const PI = 3.14;
let r, v, s;
r=parseFloat(prompt('r='));
v=(3/4) * PI *r ** 3;
s = 4 * PI * r ** 2;
console.log('v=', v, 's=', s);
//10
let N, M, x, y;
x = 10;
y = 15;
N=parseInt(prompt('vvedi skolko tetradey'));
M=parseInt(prompt('vvedi skolko ruchek'));
let total = N*x+M*y;
console.log(total);
//14
let answer_user, answer_comp;
answer_user = parseInt(prompt('2+2=?'));
answer_comp = 4;
if(answer_user == answer_comp){
    alert("You're right!");

} else{
    alert('Bad answer:(');
}
//15

let a,b;
let answer_user, answer_comp;
a = prompt('vvedi pervoye chislo');
b = prompt('vvedi vtoroye chislo');
answer_user  = prompt('chemu ravno ih proizvedenie');
answer_comp = a*b;
if(answer_user == answer_comp){
    alert(`You're right! It's ${answer_comp}`);
} else{
    alert(`Bad answer:( It's ${answer_comp}`);
}

//4

let sum, countM, pr;
sum=1000;
countM=18;
pr=0.05;
pr /=100;
// sum=sum+sum*pr;
// sum=sum*(1+pr);
sum *= (1 + pr) * countM;
console.log(sum);
//6, 11, 12, 13, 16 - cam.
//2:24
let user_value;
user_value = +prompt();
if (user_value%2==0 && user_value>=100) {
    user_value /=2;
} else {
    user_value *= 3;
}

let i,
str = ''; 
for (i = 1; i <= 10; i++) {
    str = str + '*';
   }
      console.log(str);

