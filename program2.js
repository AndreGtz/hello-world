
var ls = process.argv;
var sum = 0;
for(var i = 2; i<process.argv.length;i++){
	sum+= Number(ls[i]);
}
console.log(sum);
