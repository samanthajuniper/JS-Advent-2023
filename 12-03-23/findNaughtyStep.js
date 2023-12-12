// In Santa's workshop, a mischievous elf has been playing around with the gift production line, adding or removing an unplanned step.

// You have the original sequence of original manufacturing steps and the modified modified sequence that may include an extra step or be missing a step.

// Your task is to write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain. If there is no difference between the sequences, return an empty string.

// Examples

// const original = 'abcd'
// const modified = 'abcde'
// findNaughtyStep(original, modified) // 'e'

// const original = 'stepfor'
// const modified = 'stepor'
// findNaughtyStep(original, modified) // 'f'

// const original = 'abcde'
// const modified = 'abcde'
// findNaughtyStep(original, modified) // ''

function findNaughtyStep(original, modified) {
  let extraStep;

  //early exit
  if(original === modified){
    extraStep = ''
  } else {
    const longestString = Math.max(original.length, modified.length)

    for (let i=0; i<longestString; i++) {
      if (original.charAt(i) !== modified.charAt(i) && !extraStep){
        if(original.length > modified.length) {
          extraStep = original.charAt(i)
          break;
        } else {
          extraStep = modified.charAt(i)
          break;
        }
      } 
    }
  }

  return extraStep
}