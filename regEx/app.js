// let re;
// re = /hello/;
// re = /hello/i; // i flag makes it case-insensitive
// re = /hello/g; // g flag - global search, ie searches all instances

// console.log(re);
// console.log(re.source);

// exec() - Return result in an array or null
// const result = re.exec("hello world");
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false
// const result = re.test("Hello");
// console.log(result);

// match() - Returns result array or null
// const str = "Hello There";
// const result = str.match(re);
// console.log(result);

// search() - Return index of the first match if not found retuns -1
// const str = "Brad Hello There";
// const result = str.search(re);
// console.log(result);

// replace() - Will retun a new string with some or all matches of a pattern
// const str = "Hello There";
// const newStr = str.replace(re, "Hi");
// console.log(newStr);

let re;
// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter symbols
re = /^h/i;       // Must start with
re = /World$/i;   // Must end with
re = /^hello$/i;  // Must start with and end with
re = /^h.llo$/i;  // Matches any one character
re = /h*llo/i;  // Matches any character 0 or more times
re = /gra?e?y/i;  // Optional character
re = /gra?e?y\?/i;  // Excape character

// Brackets [] - Character sets
re = /gr[ae]y/i;  // Must be an a or e
re = /[GF]ray/;  // Must be a G or F
re = /[^GF]ray/;  // Will macth anything except G or F 
re = /[A-Z]ray/;  // Match any uppercase letter
re = /[a-z]ray/;  // Match any uppercase letter
re = /[A-Za-z]ray/;  // Match any letter
re = /[0-9][0-9]ray/;  // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {x} amount of times
re = /Hel{2,4}o/i; // Must occur 2 to 4 amount of times
re = /Hel{2,}o/i; // Must occur at least {x,} amount of times

// Parentheses () - Grouping
re = /([0-9]x){3}/; 

// Short hand character classes
re = /\w/;  // Word character - alphanumeric or _
re = /\w+/;  // + = one or more
re = /\W/;  // Non-Word character
re = /\W/;  // Non-Word character
re = /\d/;  // Match any digit
re = /\d+/;  // Match any digit zero or more times
re = /\D/;  // Non-digit
re = /\s/;  // Match whitespace character
re = /\S/;  // Match non whitespace character
re = /Hell\b/i;  // Word boundary 

// Assertions
re = /x(?=y)/;  // Match x only if followed by y
re = /x(?!y)/;  // Match x only if NOT followed by y

// String to match
const str = "xy";

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);