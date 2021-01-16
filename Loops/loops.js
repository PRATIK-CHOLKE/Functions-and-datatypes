const myStates = [
    "Rajasthan",
    "Delhi", 
    "Assam",
    1947, 
    "Tamil Nadu", 
    "Maharashtra"
];

console.log("-------FOR LOOP-------");
for (let i = 0; i < myStates.length; i++)
{
    console.log(myStates[i]);
}

// Ignoring 1947.

console.log("******************");
for (let i = 0; i < myStates.length; i++)
{
    if (typeof myStates[i] !== "string")
        continue;
    console.log(myStates[i]);
}

console.log("-------WHILE LOOP-------");
let i = 0;
while( i < myStates.length)
{
    console.log(myStates[i]);
    i++;
}

console.log("-------DO WHILE-------");

let j = 0;
do{
    j++;
    if (typeof myStates[j] === "string")
        continue;
    console.log (myStates[j]);
}while(j < myStates.length - 1);

