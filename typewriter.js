const sentence = "hello there from lighthouse labs";
let delay = 0;

for (const char of sentence) {
  setTimeout((charToPrint) => {  //insde the settimer call back, print char 
    process.stdout.write(charToPrint); 
  }, delay, char);

  delay += 50; //increment delay by 50ms each letter
}

setTimeout(() => { //to print new line after the outcome
  process.stdout.write('\n'); //means new line
}, delay);
