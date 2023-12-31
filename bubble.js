/**
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
 *
 * Feel free to add helper functions if needed.
 *
 *  Example usage:
 * bubbleSortTest([2, 1, 3]); // yields [1, 2, 3]
 */
function recursiveBubbleSort(arr, n) {
    // Base case: If the array has one or zero elements, it is already sorted
    if (n <= 1) {
      return;
    }
  
    // One pass through the array to move the largest element to its correct position
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  
    // Recur with one less element since the last element is already in its correct position
    recursiveBubbleSort(arr, n - 1);
  }
  
  // Example usage:
  const arr = [64, 34, 25, 12, 22, 11, 90];
  const n = arr.length;
  recursiveBubbleSort(arr, n);
  console.log("Sorted array:", arr);
  