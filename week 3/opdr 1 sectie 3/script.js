// opdracht 8,9,10
function smile(){
    console.log("Cheese")
}

function smile(){
    console.log("Cheese");
}
smile();
smile();

//opdr 11,12,13,14,15,16
function love(numberOfHuges){
    console.log(`Je krijgt ${numberOfHuges} knuffels van mij <3`)
}

love(12);

function love(numberOfHuges){
    console.log(`Je krijgt ${numberOfHuges} ${numberOfHuges > 1 ? 'knuffels' : 'knuffel'} van mij <3`);
}
love(12);
//love(1);

function love(numberOfHuges, name){
    console.log(`Je krijgt ${numberOfHuges} ${numberOfHuges > 1 ? 'knuffels' : 'knuffel'} van mij <3`);
    if(name === 'Jorn') console.log('extra knuffels!');
}
love(12, 'jorn');

//opdr 17, 18, 19
//function power(base, exponent){
    //return base ** exponent;
//}
//const result = power(2, 2);
//console.log(result);

function power(base, exponent){
    return base ** exponent;
}
console.log(power(2,2));
const result = power(2, 2);
console.log(result);

let i = 10;
while(i >= 0){
    console.log(guus(i))
    i--;
}
function guus(i){
    return `Ik tel tot ${1}`;
}

const objectOne = {
    firstName: "Henk",
    lastName: "de Vries",
    age: 2021 - 1988,
    job: "teacher",
    friends: ["Koe","Vos"],
    getFullName: function(){
    return `${this.firstName} ${this.lastName}`
},
};
console.log(objectOne.friends.length);