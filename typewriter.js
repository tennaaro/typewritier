const sentence = "hello there from lighthouse labs\n";

setTimeout(() => {
  // print the char here
  for (const char of sentence) {
    process.stdout.write(char);
  }
}, 1000) 
