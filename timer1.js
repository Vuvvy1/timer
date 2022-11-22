const args = process.argv.slice(2);
args.forEach((number) =>{
  if (number >= 0) {
    setTimeout((number) => {
      process.stdout.write('\x07');
    }, (number * 1000));
  }
});
//process.stdout.write('\x07');