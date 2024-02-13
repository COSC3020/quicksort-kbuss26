/*
    Keifer Buss 
    COSC-3020-01 
    Last modified Feb. 13 2024
    Sources: 
    - Mergesort Exercise code
    - Class Quicksort slides
*/

// Note: THIS IS UNFINISHED. An issue still needs be fixed since the pivot doesn't always end at the middle

// In-place array bounds
function quicksort(array) {
    len = array.length;

    // For iterative definitions
    var splitSize = 2 ** Math.floor(Math.log2(len));
    var splitHi;
    var splitLo;

    // Splitting arrays by multiples of 2 to know which arrays are sorted, then merging the arrays
    while (splitSize > 1){
        for (var i = 0; i < (Math.ceil(len/splitSize)); i++) {

            splitLo = i * splitSize;
            splitHi = splitLo + (splitSize - 1); // Inital assignment
            splitHi = (splitHi > (len - 1)) ? len - 1 : splitHi; // Prevent overflow

            qsort(array, splitLo, splitHi);
            console.log(splitLo, splitHi, array)
        }
        splitSize /= 2;
    }
    
    return array;
}

// Quicksort (Jon Bentley's algorithm)
function qsort(array, lo, hi) {
    switch (hi - lo) {
        case 0:
            return; // Already sorted, for there exists one element
        default:
            var pivot = lo;
            for(var i = lo + 1; i <= hi; i++) {
                console.log(i, array[i], pivot, array[pivot], array)
                if(array[i] < array[lo]) {
                    pivot++;
                    swap(array, pivot, i);
                }
                
            }
            swap(array, lo, pivot);
    }
    return;
}

// Average (floor) function
function ave(n1, n2) { return Math.floor((n1 + n2) / 2)}

// Swap function
function swap(arr, pos1, pos2) {
    var temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;
    return;
}
