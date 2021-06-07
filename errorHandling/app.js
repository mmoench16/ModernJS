const user = {email: "jdoe@gmail.com"};

try {
  // Produce a reference error
  // myFunction();

  // Produce TypeError
  // null.myFunction();

  // SyntaxError
  // eval('Hello World');

  // Will produce
  // decodeURIComponent("%");

  if (!user.name) {
    // throw "User has no name"
    throw new SyntaxError("User has no name.")
  }

} catch (e) {
  // console.log(`${e.name}ITS NULL STUPID`)
  console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof ReferenceError);
} finally {
  console.log("Finally runs regardless of result")
}

console.log("Program continues")