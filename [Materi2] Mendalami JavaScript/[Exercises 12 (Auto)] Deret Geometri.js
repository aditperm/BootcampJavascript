//exercise12 Tentukan Deret Geometri

function tentukanDeretGeometri(arr) {
for (var i = 0; i < arr.length; i++){
return arr[i+1] / arr[i] === arr[arr.length-1] /  arr[arr.length-2];
}
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
