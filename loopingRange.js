function range(start, end, step){
  let array = [];
  if(start === undefined || end === undefined || step === undefined){
    return array;
  } else if(start > end){
    return array;
  } else if (step <= 0){
    return array;
  } else {
    let counter = start;
    while (counter < end){
      array.push(counter);
      counter += step;
    }
    array.push(end);
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));