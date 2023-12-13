// In Santa's workshop, some Christmas messages have been written in a peculiar way: the words within the brackets must be read backwards.
// Santa needs these messages to be correctly formatted. Your task is to write a function that takes a string and reverses the characters within each pair of parentheses, removing the parentheses as well.
// However, bear in mind that there may be nested parentheses, so you should reverse the characters in the correct order.

// Examples
// const a = decode('hola (odnum)')
// console.log(a) // hola mundo

// const b = decode('(olleh) (dlrow)!')
// console.log(b) // hello world!

// const c = decode('sa(u(cla)atn)s')
// console.log(c) // santaclaus



function decode(message) {
// use to keep track of parenthesis
 const stack = [];
  let result = '';

  for (const char of message) {
      if (char === '(') {
        //  if opening (, push current result to stack and reset the result to empty string
      stack.push(result);
      result = '';
    } else if (char === ')') {
    // if closing ), take last result off of stack and concatenate with the latest result after reversing it
      result = stack.pop() + result.split('').reverse().join('');
    } else {
      result += char;
    }
  }

  return result;
}

// Example breakdown
// const c = decode('sa(u(cla)atn)s')
// console.log(c) // santaclaus

// 1st chunk: "sa"
  // stack = []
  //  result = "sa"
// 2nd: "("
  // stack = ["sa"]
  // result = ""
// 3rd: "u"
  // stack = ["sa"]
  // result = "u"
// 4th: "("
  // stack = ["sa", "u"]
  // result = ""
// 5th: "cla"
  // stack = ["sa", "u"]
  // result = "cla"
// 6th: ")"
  // stack = ["sa"]
  // result = "ualc"
// 7th: "atn"
  // stack = ["sa"]
  // result = "ualcatn"
// 8th: ")"
  // stack = []
  // result = "santaclau"
// 9th: "s"
  // stack = []
  // result = "santaclaus

