function counter(n) {
    let count = n;
    const interval = setInterval(() => {
      console.log(count);
      count--;
      if (count < 0) {
        clearInterval(interval);
      }
    }, 1000);
  }
  counter(5);