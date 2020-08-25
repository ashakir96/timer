const input = process.argv.slice(2);

for (let item of input) {
  item = Number(item);
  if (!isNaN(item) && item > 0) {
    setTimeout(() => {
      process.stdout.write('\007');
      console.log(item);
    }, item * 1000)
  } 
}