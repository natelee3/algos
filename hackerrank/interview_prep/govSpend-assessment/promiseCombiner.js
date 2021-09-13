function promiseCombiner(...promises) {
    if (promises.length === 0) {
      throw new Error('At least one argument is required');
    }
    let array = [];
    const waiting = async () => {
      await Promise.all([...promises]).then(value => {
        if (!!value) {
          array.push(value);
        } 
      }).then();
    } 
    co
    // if (!!waiting) {
    //   const result = array.reduce((a,b) => a + b);
    //   return result
    // }

    
  }


  const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

const promiseArray = [promise1, promise2, promise3]

promiseCombiner(promiseArray);
