const names = [
    "Youtube", 
    "Facebook",
    "Instagram",
    "Netflix",
    "Amazon"
];

console.log("------------of----------")
for (const n of names)
{
    console.log(n);
}

const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    am: "Amazon"
};

console.log("--------in--------")
for (const n in symbols)
{
    console.log(`Key is: ${n} and value is: ${symbols[n]}`);
}