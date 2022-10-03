const cijfer1 = 8;
const cijfer2 = 10;
const cijfer3 = 9;
const kut = "meergronden cijfers:";
console.log(kut,cijfer1,cijfer2,cijfer3);

const age = 16;
console.log(age);

//if(typeof bar === 'number') {}

//opdr 11,12,13
const num = 2022;
const num2 = 2006;
const num3 = 2;
const age1 = "myAge";
console.log(age1, num - num2);
console.log(age1, (num - num2) * num3);

//opdr 14
const num4 = 8;
const num5 = 8;
console.log((num4)*(num5))

//opdr 15
const street = "Daniel Staelperstraat";
const number = "41";
console.log(street, number);

//opdr 16,17,18,19
const numberOne = 12;
const numberTwo = 15;
const numberThree = 1;
console.log(numberOne + numberTwo)
console.log(numberOne + 15)
console.log(numberOne * numberTwo)
console.log(numberOne * 15)
console.log(numberOne + numberThree)
console.log(numberOne + 1)
console.log(1 + numberOne)
console.log(numberOne - numberThree)
console.log(numberOne - 1)
console.log(numberThree - numberOne + 22 );

// opdr 20
const lengte = 183;
const lengte2 = 178;
console.log(((lengte * 3)+(lengte2)) / 4)

// opdr 21
const lengte3 = 192;
const lengte4 = 153;
console.log(((lengte4 * 3)+(lengte3)) / 4)

//opdr 22
const BMI = 28.6;
const kilo = 93;
console.log(kilo + (BMI + BMI))

//opdr 23
const BMI1 = 28.6;
const lengte5 = 188;
console.log(lengte5 - (BMI1 / BMI1))

//part 1 video 17-19 opdr 1,2,3,4,5
const vnaam = "Youri";
const anaam = "Rodenburg";
const leeftijd = 16;
const leeftijd1 = 50;
const zin = "Mijn naam is";
const zin1 = "Mijn volledige naam is";
const zin2 = "In 2056 ben ik"
console.log(vnaam,anaam,leeftijd )
console.log(zin, vnaam)
console.log(zin1, vnaam, anaam)
console.log(zin2, leeftijd1)
console.log("Mijn naam is Youri en ik ben 16 jaar oud. Daarnaast is mijn familienaam Rodenburg")

//laatste opdracht 
function city(Amsterdam){
    return (Amsterdam ? 'Koetjeboe' : 'koeye');
}

console.log(city(true));
console.log(city(false));
console.log(city(null));