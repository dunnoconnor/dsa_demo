const mergeSort = require('./mergeSort')

test('mergeSort function exists', () => {
    expect(typeof mergeSort).toEqual('function');
});
  
test('mergeSort sorts an array', () => {
    expect(mergeSort([5, 3, 6, 1, 8, 7, 2, 4])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
  
test('mergeSort sorts an array with negative numbers', () => {
    expect(mergeSort([5, -3, 6, 1, -8, 7, 2, 4])).toEqual([-8, -3, 1, 2, 4, 5, 6, 7]);
});
  
test('mergeSort sorts an array with repeating values', () => {
    expect(mergeSort([1,1,1,1,1,0,0,0,0,0])).toEqual([0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);
});
  
test('mergeSort sorts an empty array', () => {
    expect(mergeSort([])).toEqual([]);
});