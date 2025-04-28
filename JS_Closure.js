function outer(out) {
  function inner() {
    console.log("Hello from inner function", out);
  }
  inner();
}

outer("Out value");
