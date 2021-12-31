// Task 1 Map
function map(arr, func) {
  let mapArr = [];
  for (let i = 0; i < arr.length; i++) {
    mapArr.push(func(arr[i]));
  }
  return mapArr;
}

console.log(
  map([1, 23, 4, 5, 6], (val) => {
    return val * 2;
  })
);
// Task 1 slice
function slice(array, index, index2) {
  let slicedArr = [];
  if (index < 0) {
    index = array.length + index;
  }
  if (index2 < 0) {
    index2 = array.length + index2;
  }
  if (index2 === undefined || index2 > array.length) {
    index2 = array.length;
  }

  if (index === undefined) {
    return array;
  } else {
    for (let i = index; i < index2; i++) {
      slicedArr.push(array[i]);
    }
    return slicedArr;
  }
}
console.log(slice([1, 2, 3, 4, 5, 6, 7, 8, 9], -5, -2));

// Task 2
const givenArr = [1, 2, 3, [1], [4, [3, [[1]]]]];
let array = [];
function destroyArr(arr) {
  arr.map((val) => {
    val = !Array.isArray(val) ? array.push(val) : destroyArr(val);
  });
  return array;
}
destroyArr(givenArr);
console.log(array);
