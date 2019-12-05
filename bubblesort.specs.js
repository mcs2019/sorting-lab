import bubbleSort from './bubblesort';

describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles single item in an array', function() {
    expect(bubbleSort([item])).toEqual([item]);
  });
  it('handles multiple items in an array', function() {
    expect(bubbleSort(array).toEqual(array.sort()));
  });
});
