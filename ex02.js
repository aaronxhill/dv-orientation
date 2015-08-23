// console.log(process.argv);
var t=0; 

// console.log(process.argv)

for (var i=2; i < process.argv.length; i++) {
    t = t + (process.argv[i] * 1);
    // console.log(process.argv[i])
}

console.log(t)