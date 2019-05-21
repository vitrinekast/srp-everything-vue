// Return the value, with a min or max value
const valBetween = (v, min, max) => {
  return (Math.min(max, Math.max(min, v)));
}

// Adds a class when the classlist of the elem doesnt contain the class (and vice-versa)
const addOrRemoveClassWhenContains = ({remove, className, elem}) => {
  
  if(remove) {
    if(elem.classList.contains(className)) {
      elem.classList.remove(className)
    }
  } else {
    if(!elem.classList.contains(className)) {
      elem.classList.add(className)
    }
  }
}

export {
  valBetween,
  addOrRemoveClassWhenContains
}
