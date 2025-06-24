
function processData(input: string|number, config: {reverse: boolean}= {reverse: false}):string|number{
  //setup a type guard
  if (typeof input === 'number') {
    return input * 2;
  }
  else{
    return config.reverse ? input.toUpperCase().split('').reverse().join('') : input.toUpperCase();
  }
}

console.log("Processing data...");
console.log(processData("hello world"));
console.log(processData(50));
console.log(processData("hello world", {reverse: true}));
console.log(processData(100, {reverse: true}));
console.log("Data processed successfully!");