const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

const promises = [promise1, promise2, promise3];

function promiseCombiner(...promises) {
    if (promises.length === 0) {
      throw new Error('At least one argument is required');
    }
    console.log(promises)
    // TODO: complete the function
    Promise.all([...promises]).then(values => {
        console.log(values.reduce((a,b) => a + b, 0))
    });
  };

promiseCombiner(promises)