const arr = process.argv.slice(2);

console.log(`[${arr}] becomes "${arr.map( x => x[0] ).reduce( (a,b) => a+b, '')}"`);
