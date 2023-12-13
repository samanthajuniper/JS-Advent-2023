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